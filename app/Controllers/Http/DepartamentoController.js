'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with departamentos
 */

const Departamento = use('App/Models/Departamento')

class DepartamentoController {
  /**
   * Show a list of all departamentos.
   * GET departamentos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({request, response, view}) {
    const departamento = await Departamento.query().with('secretaria').fetch()
    return departamento
  }

  /**
   * Render a form to be used for creating a new departamento.
   * GET departamentos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({request, response, view}) {
  }

  /**
   * Create/save a new departamento.
   * POST departamentos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({request, response, auth}) {
    if (auth.user.tipo === 1) {
      return Departamento.create(request.all())
    } else {
      return response.status(401)
        .send([{
          message: 'Você não possui permissão para esse recurso'
        }])
    }

  }

  /**
   * Display a single departamento.
   * GET departamentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({params, request, response, view}) {
  }

  /**
   * Render a form to update an existing departamento.
   * GET departamentos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({params, request, response, view}) {
  }

  /**
   * Update departamento details.
   * PUT or PATCH departamentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({params, request, response}) {
  }

  /**
   * Delete a departamento with id.
   * DELETE departamentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({params, request, response, auth}) {
    if (auth.user.tipo === 1) {
      const departamento = await Departamento.findOrFail(params.id)
      return await departamento.delete()
    } else {
      return response.status(401)
        .send([{
          message: 'Você não possui permissão para esse recurso'
        }])
    }
  }
}

module.exports = DepartamentoController
