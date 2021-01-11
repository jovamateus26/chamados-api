'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with secretarias
 */
const Secretaria = use('App/Models/Secretaria')

class SecretariaController {

  async index() {
    return Secretaria.all()
  }

  /**
   * Render a form to be used for creating a new secretaria.
   * GET secretarias/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({request, response, view}) {
  }

  /**
   * Create/save a new secretaria.
   * POST secretarias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({request, response, auth}) {
    if (auth.user.tipo === 1) {
      return Secretaria.create(request.all())
    } else {
      return response
        .status(401)
        .send([{
          message: 'Você não possui permissão para esse recurso'
        }])
    }
  }

  /**
   * Display a single secretaria.
   * GET secretarias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({params, request, response, view}) {
  }

  /**
   * Render a form to update an existing secretaria.
   * GET secretarias/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({params, request, response, view}) {
  }

  /**
   * Update secretaria details.
   * PUT or PATCH secretarias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({params, request, response}) {
    return params.id
  }

  /**
   * Delete a secretaria with id.
   * DELETE secretarias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({params, request, response, auth}) {
    if (auth.user.tipo === 1) {
      const secretaria = await Secretaria.find(params.id)
      return secretaria.delete()
    } else {
      return response
        .status(401)
        .send([{
          message: 'Você não possui permissão para esse recurso'
        }])
    }
  }
}

module.exports = SecretariaController
