'use strict'

class UsuarioStore {
  get rules () {
    return {
      // validation rules
      name: 'required',
      email: 'required|email|unique:users,email',
      password: 'required|confirmed'
    }
  }
  get messages () {
    return {
      'name.required': 'O campo nome não pode ser em branco',
      'email.required': 'O campo email não pode ser em branco',
      'email.email': 'O email informado é inválido',
      'email.unique': 'O email informado já está em uso',
      'password.required': 'O campo senha não pode ser em branco',
      'password.confirmed': 'As senhas não são iguais'
    }
  }
}

module.exports = UsuarioStore
