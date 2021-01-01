'use strict'

class SecretariaStore {
  get rules () {
    return {
      // validation rules
      secretaria: 'required'
    }
  }

  get messages () {
    return {
      'secretaria.required': 'O campo secretaria não pode ser em branco'
    }
  }
}

module.exports = SecretariaStore
