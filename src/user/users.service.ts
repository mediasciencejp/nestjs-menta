import { Injectable } from '@nestjs/common';
import { PhysicalUsersService } from '../physical/users/physical-users.service';
import { User } from './user';
import { PhysicalUser } from '../physical/users/physical-user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly physicalUsersRepository: PhysicalUsersService) {}

  async findAll(): Promise<User[]> {
    const physicalUsers = await this.physicalUsersRepository.findAll();

    return physicalUsers.map(
      (pu: PhysicalUser) =>
        new User(pu.id, pu.firstName, pu.lastName, pu.isActive),
    );
  }

  /*
  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }
  */

  async remove(id: string): Promise<void> {
    await this.physicalUsersRepository.remove(id);
  }
}
