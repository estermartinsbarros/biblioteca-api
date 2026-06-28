import { BookSchema } from '#database/schema'
import { belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Author from './author.ts'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
import Loan from './loan.ts'

export default class Book extends BookSchema {
  public static table = 'books'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare titulo: string

  @column()
  declare data_publicacao: DateTime

  @column()
  declare editora: string | null

  @column()
  declare quantidade: number

  @column()
  declare authorId: number | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Loan)
  declare loan: HasMany<typeof Loan>

  @belongsTo(() => Author)
  declare author: BelongsTo<typeof Author>
}
