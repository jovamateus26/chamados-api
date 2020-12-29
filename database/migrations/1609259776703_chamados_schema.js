'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChamadosSchema extends Schema {
  up () {
    this.create('chamados', (table) => {
      table.increments()
      table.integer('assunto_id').unsigned()
      table.string('titulo', 250)
      table.text('texto')
      table.str
      table.timestamps()
    })
  }

  down () {
    this.drop('chamados')
  }
}

module.exports = ChamadosSchema
