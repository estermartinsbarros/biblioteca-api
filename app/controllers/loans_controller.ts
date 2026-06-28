import type { HttpContext } from '@adonisjs/core/http'
import Loan from '#models/loan'
import Book from '#models/book'
import User from '#models/user'
import { createLoanValidator } from '#validators/loan'

export default class LoansController {
  async index({}: HttpContext) {
    return await Loan.query().preload('book').preload('user')
  }

  async show({ params, response }: HttpContext) {
    const loan = await Loan.query().where('id', params.id).preload('book').preload('user').first()

    if (!loan) {
      return response.status(404).json({
        error: 'Empréstimo não encontrado',
      })
    }
    return loan
  }

  async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(createLoanValidator)

    const user = await User.find(data.user_id)

    if (!user) {
      return response.status(404).json({
        error: 'Usuário não encontrado',
      })
    }

    const book = await Book.find(data.book_id)

    if (!book) {
      return response.status(404).json({
        error: 'Livro não encontrado',
      })
    }
    if (book.quantidade <= 0) {
      return response.status(400).json({
        error: 'Livro indisponível',
      })
    }
    book.quantidade--
    await book.save()

    const loan = await Loan.create({
      userId: data.user_id,
      bookId: data.book_id,
      status: false,
      dataEmprestimo: new Date(),
    })
    return loan
  }

  async update({ params, response }: HttpContext) {
    const loan = await Loan.find(params.id)

    if (!loan) {
      return response.status(404).json({
        error: 'Empréstimo não encontrado',
      })
    }

    if (loan.status) {
      return response.status(400).json({
        error: 'Este livro já foi devolvido',
      })
    }

    loan.status = true
    loan.dataDevolucao = new Date()

    const book = await Book.find(loan.bookId)

    if (book) {
      book.quantidade++
      await book.save()
    }

    await loan.save()

    return loan
  }

  async destroy({ params, response }: HttpContext) {
    const loan = await Loan.find(params.id)

    if (!loan) {
      return response.status(404).json({
        error: 'Empréstimo não encontrado',
      })
    }
    await loan.delete()
    return response.status(200).json({
      message: 'Empréstimo removido com sucesso',
    })
  }
}
