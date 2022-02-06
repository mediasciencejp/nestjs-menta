import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AltController } from './alt.controller';
import { AltService } from './alt.service';
import { UsersModule } from './user/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule],
  controllers: [AppController, AltController],
  providers: [AppService, AltService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
