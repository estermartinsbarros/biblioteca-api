import { LoanSchema } from '#database/schema'
import { belongsTo, column } from '@adonisjs/lucid/orm'
import Book from './book.ts'
import User from './user.ts'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'

export default class Loan extends LoanSchema {
  public static table = 'loans'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare status: boolean

  @column()
  declare dataEmprestimo: Date

  @column()
  declare dataDevolucao: Date

  @column()
  declare bookId: number

  @column()
  declare userId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Book)
  declare book: BelongsTo<typeof Book>

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
}
