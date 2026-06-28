import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'loans'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.boolean('status').notNullable().defaultTo(false)
      table.date('dataEmprestimo').notNullable()
      table.date('dataDevolucao').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE')
      table.integer('book_id').notNullable().references('id').inTable('books').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
