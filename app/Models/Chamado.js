'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Chamado extends Model {
  assunto () {
    return this.belongsTo('App/Models/Assunto');
  }
}

module.exports = Chamado
