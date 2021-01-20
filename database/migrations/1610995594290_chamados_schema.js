'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChamadosSchema extends Schema {
  up () {
    this.table('chamados', (table) => {
      // alter table
      table.integer('assunto_id')
        .unsigned()
        .references('id')
        .inTable('assuntos')
    })
  }

  down () {
    this.table('chamados', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ChamadosSchema
