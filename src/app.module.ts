import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssetsManagementModule } from './base-service/assets-management/assets-management/assets-management.module';
import { DatabaseModule } from './database-service/database.module';
import { BaseService } from './http-service/base-api.service';
import { AccessoriesManagementModule } from './base-service/accessories-management/accessories-management/accessories-management.module';

@Module({
  imports: [HttpModule, DatabaseModule, AssetsManagementModule, AccessoriesManagementModule],
  controllers: [AppController],
  providers: [AppService, BaseService],
})
export class AppModule {}
