/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import WeathersController from 'App/Controllers/Http/WeathersController'

Route.get('/', async () => {
  return { message: 'Welcome to WeatherForecast API' }
})

Route.group(() => {
  Route.post('/register', 'AuthController.register')
  Route.post('/login', 'AuthController.login')
  Route.post('/logout','AuthController.logout')
  Route.get('/forecast/:location', WeathersController.getForecastById).middleware(['cors'])
}).prefix('api')
