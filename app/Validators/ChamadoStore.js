'use strict'

class ChamadoStore {
  get rules () {
    return {
      // validation rules
      dono: 'required',
      assunto_id: 'required',
      titulo: 'required',
      texto: 'required',


    }
  }
  get messages () {
    return {
      'dono.required': 'Selecione o usuário solicitante',
      'titulo.required': 'O campo titulo não pode ser em branco',
      'assunto_id.required': 'Selecione um assunto',
      'texto.required': 'O campo descrição completa não pode ser em branco'

    }
  }
}

module.exports = ChamadoStore
