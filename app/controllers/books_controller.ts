import Author from '#models/author'
import Book from '#models/book'
import { createBookValidator, updateBookValidator } from '#validators/book'
import { HttpContext } from '@adonisjs/core/http'

export default class BookController {
  async index({}: HttpContext) {
    const books = await Book.query().preload('author')

    return books
  }

  async show({ params, response }: HttpContext) {
    const book = await Book.query().where('id', params.id).preload('author').first()

    if (!book) {
      return response.status(404).json({
        error: 'Livro não encontrado',
      })
    }
    return book
  }

  async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(createBookValidator)
    const author = await Author.find(data.authorId)

    if (!author) {
      return response.status(404).json({
        error: 'Autor não encontrado',
      })
    }

    const book = await Book.create({
      titulo: data.titulo,
      dataPublicacao: data.dataPublicacao,
      editora: data.editora,
      quantidade: data.quantidade,
      authorId: data.authorId,
    })

    return book
  }

  async update({ params, request, response }: HttpContext) {
    const book = await Book.find(params.id)

    if (!book) {
      return response.status(404).json({
        error: 'Livro não encontrado',
      })
    }

    const data = await request.validateUsing(updateBookValidator)
    const author = await Author.find(data.authorId)

    if (!author) {
      return response.status(404).json({
        error: 'Autor não encontrado',
      })
    }

    book.merge({
      titulo: data.titulo,
      dataPublicacao: data.dataPublicacao,
      editora: data.editora,
      quantidade: data.quantidade,
      authorId: data.authorId,
    })

    await book.save()
    return book
  }
  async destroy({ params, response }: HttpContext) {
    const book = await Book.find(params.id)

    if (!book) {
      return response.status(404).json({ error: 'Livro não encontrado' })
    }

    await book.delete()
    return response.status(200).json({ message: 'Livro removido com sucesso' })
  }
}
