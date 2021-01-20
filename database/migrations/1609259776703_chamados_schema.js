'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChamadosSchema extends Schema {
  up () {
    this.create('chamados', (table) => {
      table.increments()
      table.string('titulo', 250)
      table.text('texto')
      table.integer('dono')
        .unsigned()
        .references('id')
        .inTable('users')
      table.integer('responsavel')
        .unsigned()
        .references('id')
        .inTable('users')
      table.integer('status').default(1)
      table.timestamps()
    })
  }

  down () {
    this.drop('chamados')
  }
}

module.exports = ChamadosSchema
