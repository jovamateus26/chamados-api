'use strict'


class DepartamentoStore {
  get rules () {
    return {
      // validation rules
      departamento: 'required',
      secretaria_id: 'required|exists:secretarias,id'
    }
  }

  get messages () {
    return {
      'departamento.required': 'O campo departamento não pode ser em branco.',
      'secretaria_id.required': 'Selecione uma secretaria para o departamento.',
      'secretaria_id.exists': 'A secretaria informada não existe.'
    }
  }
}

module.exports = DepartamentoStore
