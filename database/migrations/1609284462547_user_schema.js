'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.table('users', (table) => {
      // alter table
      table.integer('departamento_id')
        .unsigned()
        .references('id')
        .inTable('departamentos');
    })
  }

  down () {
    this.table('users', (table) => {
      // reverse alternations
      table.dropForeign('departamento_id')
    })
  }
}

module.exports = UserSchema
