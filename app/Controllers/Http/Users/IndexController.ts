import { inject } from '@adonisjs/core/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import type { UsersRepositoryContract } from '@ioc:Repositories/Contracts'

@inject(['@ioc:Repositories/UsersRepository'])
export default class IndexController {
  constructor(private _usersRepository: UsersRepositoryContract) {}

  public handle({}: HttpContextContract) {
    return { data: this._usersRepository.getAll() }
  }
}
