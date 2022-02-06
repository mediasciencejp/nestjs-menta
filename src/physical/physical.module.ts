import { Module } from '@nestjs/common';
import { PhysicalUsersModule } from './users/physicalUsersModule';

@Module({
  imports: [PhysicalUsersModule],
  providers: [],
  controllers: [],
  exports: [PhysicalUsersModule],
})
export class PhysicalModule {}
