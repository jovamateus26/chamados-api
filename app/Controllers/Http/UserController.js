"use strict"

const User = use("App/Models/User")

class UserController {
  async index ({ request, auth}) {
    if (auth.user.tipo ===1) {
      const data = request.only(['busca'])
      if(data.busca === null || data.busca === undefined ||  data.busca === '' ){
        const user = await User.query().with('departamento').fetch()
        return user
      } else {
        const user = await User.query().where('name','ILIKE', '%' + data.busca + '%').with('departamento').fetch()
        return user
      }
    } else {
      const user = await User.findByOrFail('id', auth.user.id)
      return [user]
    }
  }
  async store ({ request, auth }) {
    const data = request.only([
      'name',
      'email',
      'password'
    ])

    const user = await User.create(data)

    return await auth.generate(user)
  }

  async destroy ({params}) {
    const user = await User.findOrFail(params.id)
    return user.delete()
  }
}

module.exports = UserController
