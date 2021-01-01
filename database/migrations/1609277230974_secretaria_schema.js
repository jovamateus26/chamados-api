'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SecretariaSchema extends Schema {
  up () {
    this.create('secretarias', (table) => {
      table.increments()
      table.string('secretaria', 254).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('secretarias')
  }
}

module.exports = SecretariaSchema
