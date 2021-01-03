'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).unique()
      table.string('name', 254)
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('celular', '16')
      table.integer('tipo', 2)
        .notNullable()
        .default(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
