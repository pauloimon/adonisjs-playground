import { UserDto } from '@ioc:Repositories/Dtos'

interface UsersRepositoryContract {
  getAll(): UserDto[]
}

export { UsersRepositoryContract }
