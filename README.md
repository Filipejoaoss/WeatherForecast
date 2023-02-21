# WeatherForecast

Small fullstack project that uses OpenWeather API to display weather information  of cities Lisboa, Leiria, Coimbra, Porto and Faro.

The Technologies used for this project was adonis.js, web framework for node.js, MySQL, Redis and Vue.

## Backend configuration

Make a copy of .env.example and rename it as .env and configure it.

```bash
WEATHER_URL = "http://api.openweathermap.org/data/2.5/forecast"
WEATHER_API_KEY=

PORT=8080
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=yCO5rpclEH0LrRGZNxWnA_EynxozHWNm
DRIVE_DISK=local

DB_CONNECTION=mysql
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=lucid
MYSQL_PASSWORD=
MYSQL_DB_NAME=lucid

REDIS_CONNECTION=local
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
REDIS_PASSWORD=
```

Install depencies
```bash
cd weather-backend
yarn
```

Create the database in MySQL
```bash
node ace run:migration
```

Start
```bash
node ace serve --watch
```

Do not forget start the mysql server and redis server
```bash
sudo service mysql start
sudo service redis-server start
```
## Frontend configuration

Make a copy of .env.example and rename it as .env and configure it.
```bash
VITE_BASE_URL=http://localhost:8080
```

Install depencies and Start
```bash
cd weather-frontend
yarn
yarn dev
```
