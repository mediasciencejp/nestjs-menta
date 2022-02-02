import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AltController } from './alt.controller';
import { AppService } from './app.service';
import { AltService } from './alt.service';

@Module({
  imports: [],
  controllers: [AppController, AltController],
  providers: [AppService, AltService],
})
export class AppModule {}
