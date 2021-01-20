'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */

/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class AuthAdmin {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({request, response, auth}, next) {
    if (auth.user.tipo === 1) {
      await next()
    } else {
      response
        .status(401)
        .send([{
          message: 'Você não possui permissão para esse recurso'
        }])
    }
  }
}

module.exports = AuthAdmin
