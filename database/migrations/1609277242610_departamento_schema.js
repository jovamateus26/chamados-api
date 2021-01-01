'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DepartamentoSchema extends Schema {
  up () {
    this.create('departamentos', (table) => {
      table.increments()
      table.string('departamento',254)
      table.integer('secretaria_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('secretarias')
      table.string('telefone', 16)
      table.timestamps()
    })
  }

  down () {
    this.drop('departamentos')
  }
}

module.exports = DepartamentoSchema
