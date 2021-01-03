'use strict'

class SessionController {
  async create({request, auth}) {
    const {email, password} = request.all()

    return await auth.attempt(email, password)
  }

  async checkToken({auth, response}) {
    try {
      await auth.check()
      response.status(200).send('logado')
    } catch (error) {
      response.send('Missing or invalid api token')
    }
  }
}

module.exports = SessionController
