"use strict"

const User = use("App/Models/User")

class UserController {
  async create ({ request }) {
    const data = request.all()

    const users = await User.create(data)

    return users
  }
}

module.exports = UserController
