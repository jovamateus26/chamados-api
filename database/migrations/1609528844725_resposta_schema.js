'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RespostaSchema extends Schema {
  up () {
    this.create('respostas', (table) => {
      table.increments()
      table.integer('chamado_id')
        .unsigned()
        .references('id')
        .inTable('chamados')
      table.integer('usuario_id')
        .unsigned()
        .references('id')
        .inTable('users')
      table.text('texto')
      table.timestamps()
    })
  }

  down () {
    this.drop('respostas')
  }
}

module.exports = RespostaSchema
