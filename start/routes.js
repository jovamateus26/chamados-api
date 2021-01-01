'use strict'

const Route = use('Route')

Route.post('users', 'UserController.create')
Route.post('sessions', 'SessionController.create')
Route.resource('departamento', 'DepartamentoController')
Route.resource('secretaria', 'SecretariaController')
  .validator(new Map([
    [['secretaria.store'], ['SecretariaStore']]
  ]))
