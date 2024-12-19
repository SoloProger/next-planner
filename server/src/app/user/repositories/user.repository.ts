import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../database/entities/User';
import { Repository } from 'typeorm';
import { UserRequest } from '../dto/UserRequest';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>,
  ) {}

  public async getUserByEmail(email: string) {
    return await this.repository.findOne({
      where: { email },
    });
  }

  public async addUser(user: UserRequest) {
    return await this.repository.save(user);
  }
}
