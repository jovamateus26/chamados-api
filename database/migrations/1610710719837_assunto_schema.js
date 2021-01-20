'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AssuntoSchema extends Schema {
  up () {
    this.create('assuntos', (table) => {
      table.increments()
      table.string('assunto')
      table.integer('prioridade')
      table.integer('responsavel')
        .unsigned()
        .references('id')
        .inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('assuntos')
  }
}

module.exports = AssuntoSchema
