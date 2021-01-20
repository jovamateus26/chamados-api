'use strict'
const Assunto = use('App/Models/Assunto')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with assuntos
 */
class AssuntoController {
  /**
   * Show a list of all assuntos.
   * GET assuntos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({request, response, view}) {
    const assunto = await Assunto.all()
    return assunto
  }

  /**
   * Render a form to be used for creating a new assunto.
   * GET assuntos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({request, response, view}) {
  }

  /**
   * Create/save a new assunto.
   * POST assuntos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({request, response, auth}) {
    if (auth.user.tipo === 1) {
      const data = request.only([
        'assunto',
        'prioridade'
      ])
      const assunto = Assunto.create(data)
      return assunto
    } else {
      return response
        .status(401)
        .send([{
          message: 'Você não possui permissão para esse recurso'
        }])
    }
  }

  /**
   * Display a single assunto.
   * GET assuntos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({params, request, response, view}) {
  }

  /**
   * Render a form to update an existing assunto.
   * GET assuntos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({params, request, response, view}) {
  }

  /**
   * Update assunto details.
   * PUT or PATCH assuntos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({params, request, response}) {
  }

  /**
   * Delete a assunto with id.
   * DELETE assuntos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({params, request, response}) {
    const assunto = await Assunto.findOrFail(params.id)
    return await assunto.delete()
  }
}

module.exports = AssuntoController
