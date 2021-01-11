'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Departamento extends Model {
  secretaria () {
    return this.belongsTo('App/Models/Secretaria')
  }
}

module.exports = Departamento
