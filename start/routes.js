'use strict'

const Route = use('Route')

Route.post('users', 'UserController.create')
Route.post('sessions', 'SessionController.create')
Route.post('checktoken', 'SessionController.checkToken')
Route.resource('departamento', 'DepartamentoController')
  .validator(new Map([
    [['departamento.store'], ['DepartamentoStore']]
  ]))
  .middleware('auth')
Route.resource('secretaria', 'SecretariaController')
  .validator(new Map([
    [['secretaria.store'], ['SecretariaStore']]
  ]))
  .middleware('auth')
