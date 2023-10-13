import type { UsersRepositoryContract } from '@ioc:Repositories/Contracts'
import type { UserDto } from '@ioc:Repositories/Dtos'

class UsersRepository implements UsersRepositoryContract {
  private _users: UserDto[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@email.com', isActive: true },
    { id: 2, name: 'Mary Doe', email: 'mary.doe@email.com', isActive: true },
  ]

  public getAll(): UserDto[] {
    return this._users
  }
}

export { UsersRepository }
