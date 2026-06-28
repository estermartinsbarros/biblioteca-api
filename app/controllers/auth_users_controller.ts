import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { registerValidator, loginValidator } from '#validators/user'
import hash from '@adonisjs/core/services/hash'

export default class AuthController {
  async register({ request }: HttpContext) {
    const { name, email, password } = await request.validateUsing(registerValidator)

    const user = await User.create({
      name,
      email,
      password,
    })

    return user
  }

  async login({ request, response }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)

    const user = await User.findBy('email', email)

    if (!user) {
      return response.status(401).json({ error: 'Credenciais inválidas' })
    }

    const passwordValid = await hash.verify(user.password, password)

    if (!passwordValid) {
      return response.status(401).json({ error: 'Credenciais inválidas' })
    }

    const token = await User.accessTokens.create(user)

    return { token, user }
  }

  async logout({ auth, response }: HttpContext) {
    const user = auth.user!

    if (user.currentAccessToken) {
      await User.accessTokens.delete(user, user.currentAccessToken.identifier)
    }

    return response.status(200).json({
      message: 'Logout realizado com sucesso',
    })
  }
}
