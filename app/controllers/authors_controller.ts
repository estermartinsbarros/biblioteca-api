import type { HttpContext } from '@adonisjs/core/http'

import Author from '#models/author'
import { createAuthorValidator, updateAuthorValidator } from '#validators/author'

export default class AuthorsController {
  async index({}: HttpContext) {
    const author = await Author.query()

    return author
  }
  async show({ params, response }: HttpContext) {
    const author = await Author.query().where('id', params.id).first()

    if (!author) {
      return response.status(404).json({
        error: 'Autor não encontrado',
      })
    }
    return author
  }
  async store({ request }: HttpContext) {
    const data = await request.validateUsing(createAuthorValidator)
    const author = await Author.create({
      name: data.name,
      nacionalidade: data.nacionalidade,
    })
    return author
  }
  async update({ params, request, response }: HttpContext) {
    const data = await request.validateUsing(updateAuthorValidator)
    const author = await Author.find(params.id)
    if (!author) {
      return response.status(404).json({
        error: 'Autor não encontrado',
      })
    }

    author.merge({
      name: data.name,
      nacionalidade: data.nacionalidade,
    })

    await author.save()
    return author
  }

  async destroy({ params, response }: HttpContext) {
    const author = await Author.find(params.id)

    if (!author) {
      return response.status(404).json({ error: 'Autor não encontrado' })
    }

    await author.delete()
    return response.status(200).json({ message: 'Autor removido com sucesso' })
  }
}
