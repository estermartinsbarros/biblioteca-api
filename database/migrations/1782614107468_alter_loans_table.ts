import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  async up() {
    this.schema.alterTable('loans', (table) => {
      table.renameColumn('dataEmprestimo', 'data_emprestimo')
      table.renameColumn('dataDevolucao', 'data_devolucao')
    })
  }

  async down() {
    this.schema.alterTable('loans', (table) => {
      table.renameColumn('data_emprestimo', 'dataEmprestimo')
      table.renameColumn('data_devolucao', 'dataDevolucao')
    })
  }
}
