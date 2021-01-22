'use strict'

class ChamadoStore {
  get rules () {
    return {
      // validation rules
      titulo: 'required',
      texto: 'required',
      assunto_id: 'required',
      dono: 'required'
    }
  }
  get messages () {
    return {
      'titulo.required': 'O campo titulo não pode ser em branco',
      'texto.required': 'O campo descrição completa não pode ser em branco',
      'assunto_id.required': 'Selecione um assunto',
      'dono.required': 'Selecione o usuário solicitante'
    }
  }
}

module.exports = ChamadoStore
