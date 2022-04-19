import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaseService } from './http-service/base.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, BaseService],
})
export class AppModule {}
