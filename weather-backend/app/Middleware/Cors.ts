import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CorsMiddleware {
  public async handle({ response }: HttpContextContract, next: () => Promise<void>) {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    response.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    await next()
  }
}




