import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database-service/database.module';
import { BaseService } from './http-service/base-api.service';
import { AssetsManagementModule } from './base-service/assets-management/assets-management/assets-management.module';
import { AssetsManagement } from './base-service/assets-management/assets-management';

@Module({
  imports: [HttpModule, DatabaseModule, AssetsManagementModule],
  controllers: [AppController],
  providers: [AppService, BaseService, AssetsManagement],
})
export class AppModule {}
