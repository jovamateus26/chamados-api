'use strict'
const Chamado = use('App/Models/Chamado')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with chamados
 */
class ChamadoController {
  /**
   * Show a list of all chamados.
   * GET chamados
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view, auth }) {
    if (auth.user.tipo === 1) {
      const chamado = await Chamado.query().with('assunto').fetch()
      return chamado
    } else {
      const chamado = await Chamado.findBy('dono', auth.user.id)
      return chamado
    }
  }

  /**
   * Render a form to be used for creating a new chamado.
   * GET chamados/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new chamado.
   * POST chamados
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    const data = request.only([
      'responsavel',
      'assunto_id',
      'titulo',
      'texto',
      'dono'
    ])
    if(auth.user.tipo !== 1) {
      data.dono = auth.user.id
    }

    const chamado = Chamado.create(data)

    return chamado
  }

  /**
   * Display a single chamado.
   * GET chamados/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing chamado.
   * GET chamados/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update chamado details.
   * PUT or PATCH chamados/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a chamado with id.
   * DELETE chamados/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }

  /**
   * Função que retorna os dados necessarios para gerar o grafico da pagina inicial
   */
  async dadosGraficos () {
    const total = await Chamado.query().groupBy('created_at').count()
    return total
  }
}

module.exports = ChamadoController
