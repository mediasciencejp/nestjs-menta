import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PhysicalUser } from './physical-user.entity';

@Injectable()
export class PhysicalUsersService {
  constructor(
    @InjectRepository(PhysicalUser)
    private readonly usersRepository: Repository<PhysicalUser>,
  ) {}

  findAll(): Promise<PhysicalUser[]> {
    return this.usersRepository.find();
  }

  /*
  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }
  */

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}