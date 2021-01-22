'use strict'

class AssuntoStore {
  get rules () {
    return {
      // validation rules
      assunto: 'required',
      prioridade: 'required'
    }
  }

  get messages () {
    return {
      'assunto.required': 'O campo assunto não pode ser em branco',
      'prioridade.required': 'Selecione a prioridade do assunto'
    }
  }
}

module.exports = AssuntoStore
