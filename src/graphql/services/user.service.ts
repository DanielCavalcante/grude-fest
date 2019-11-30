import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from '../entities/user.entity'

@Injectable()
export class UserService {

  constructor(@InjectRepository(User)
    private readonly repository: Repository<User>
  ) {}

  async findById(id): Promise<User> {
    return await this.repository.findOne({ id })
  }

  async create(user: User) {
    return await this.repository.save(user)
  }

}
