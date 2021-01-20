'use strict'

const Route = use('Route')

Route.resource('users', 'UserController')
  .validator(new Map([
    [['users.store'],['UsuarioStore']]
  ]))
  .middleware(new Map([
    [['update', 'destroy'], ['auth', 'isAdmin']],
    [['index'], ['auth']]
  ]))
Route.post('sessions', 'SessionController.create')
Route.post('checktoken', 'SessionController.checkToken')

Route.resource('departamento', 'DepartamentoController')
  .validator(new Map([
    [['departamento.store'], ['DepartamentoStore']]
  ]))
  .middleware(new Map([
    [['store', 'update', 'destroy'], ['auth', 'isAdmin']]
  ]))

Route.resource('secretaria', 'SecretariaController')
  .validator(new Map([
    [['secretaria.store'], ['SecretariaStore']]
  ]))
  .middleware(new Map([
    [['store', 'update', 'destroy'], ['auth', 'isAdmin']]
  ]))

Route.resource('assunto', 'AssuntoController')
  .middleware(new Map([
    [['store', 'update', 'destroy'], ['auth', 'isAdmin']],
    [['index'], ['auth']]
  ]))

Route.resource('chamado', 'ChamadoController')
  .middleware(new Map([
    [['destroy'], ['auth', 'isAdmin']],
    [['index','store', 'update'], ['auth']]
  ]))
