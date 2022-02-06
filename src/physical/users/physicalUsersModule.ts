import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhysicalUsersService } from './physical-users.service';
import { PhysicalUser } from './physical-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PhysicalUser])],
  providers: [PhysicalUsersService],
  exports: [PhysicalUsersService],
})
export class PhysicalUsersModule {}
