import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from "App/Models/User";
import { rules, schema } from '@ioc:Adonis/Core/Validator'
import bcrypt from 'bcrypt'

export default class AuthController {
  //Register
  static async register({ request, response, auth }: HttpContextContract) {
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
        return response.status(422).json({ error: error })
    }
  }

  //Login
  static async login({ auth, request, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    const user = await User.findBy('email', email)

    if (!user) {
      return response.badRequest({ message: 'User does not exist' })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      return response.badRequest({ message: 'Invalid password' })
    }

    const token = await auth.use('api').generate(user)

    return response.json(token)
  }

  //Logout
  static async logout ({ auth, response }: HttpContextContract) {
    try {
      await auth.logout()
      return response.status(200).send({ message: 'Logout successful' })
    } catch (error) {
      return response.status(500).send({ error: 'Logout failed' })
    }
  }
}
