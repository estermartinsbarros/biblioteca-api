import { AuthorSchema } from '#database/schema'
import { column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Book from './book.ts'
import { DateTime } from 'luxon'

export default class Author extends AuthorSchema {
  public static table = 'authors'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare nacionalidade: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Book)
  declare book: HasMany<typeof Book>
}
