import Redis from '@ioc:Adonis/Addons/Redis'
import axios from 'axios'
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import * as console from "console";

export default class WeathersController {
  static async getForecastById({ request, response }: HttpContextContract) {
    let data = null

    const city = {
      id: request.params().location,
    }

    const redisClient = Redis.connection()

    try {
      const cachedForecast = await redisClient.get(JSON.stringify(city))

      if (cachedForecast) {
        data = JSON.parse(cachedForecast)
      } else {
        const url = `${process.env.WEATHER_URL}?id=${city.id}&APPID=${process.env.WEATHER_API_KEY}`
        const headers = {
          'Content-Type': 'application/json',
        }

        const axiosResponse = await axios.get(url, { headers: headers })

        const forecasts = axiosResponse.data.list.map((forecast) => ({
          temperature: (forecast.main.temp - 273.15).toFixed(1),
          temperature_max: (forecast.main.temp_max - 273.15).toFixed(1),
          temperature_min: (forecast.main.temp_min - 273.15).toFixed(1),
          humid: forecast.main.humidity,
          press: forecast.main.pressure,
          sea: forecast.main.sea_level,
          visibility: forecast.visibility,
          windSpeed: (forecast.wind.speed * 3.6).toFixed(1),
          dateTime: forecast.dt_txt,
        }));

        await redisClient.set(JSON.stringify(city), JSON.stringify(forecasts));

        await redisClient.expire(JSON.stringify(city), 1800);

        data = forecasts
      }

      return response.send(data)
    } catch (error) {
      return response.status(500).send({ error: "Forecast API failed" });
    }
  }
}
