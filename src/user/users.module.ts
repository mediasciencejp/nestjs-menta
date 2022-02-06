import { Module } from '@nestjs/common';
import { PhysicalModule } from 'src/physical/physical.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [PhysicalModule],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
