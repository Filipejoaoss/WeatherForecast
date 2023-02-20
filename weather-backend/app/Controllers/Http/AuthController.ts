import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from "App/Models/User";
import { rules, schema } from '@ioc:Adonis/Core/Validator'

export default class AuthController {
  //Register
  public async register({ request, response, auth }: HttpContextContract) {
    try {
      const validations = await schema.create({
        name: schema.string({}, [rules.required()]),
        email: schema.string({}, [rules.email(), rules.required(), rules.unique({ table: 'users', column: 'email' })]),
        password: schema.string({}, [rules.required(), rules.confirmed()]),
      })

      const data = await request.validate({ schema: validations })
      const user = await User.create(data)

      const token = await auth.use('api').generate(user)

      return response.status(201).json({ user, token })
    } catch (error) {
      if (error.messages) {
        return response.status(422).json({ errors: error.messages })
      }
    }
  }

  //Login
  static async login({ request, response, auth }: HttpContextContract) {
    const email = await request.input('email')
    const password = await request.input('password')

    try {
      const token = await auth.use('api').attempt(email, password, {
        expiresIn: '30min',
      })
      return token.toJSON()
    } catch (error) {
      if (error.code === 'E_INVALID_AUTH_PASSWORD') {
        return response
          .status(400)
          .send({error: {message: 'Incorrect password'}})
      } else if (error.code === 'E_INVALID_AUTH_UID') {
        return response
          .status(400)
          .send({error: {message: 'User not found'}})
      } else {
        return response
          .status(400)
          .send({error: {message: 'Login failed'}})
      }
    }
  }

  static async logout({ auth, response }: HttpContextContract) {
    try {
      await auth.logout()
      return response.status(200).send({ message: 'Logout successful' })
    } catch (error) {
      return response.status(500).send({ error: 'Logout failed' })
    }
  }
}
