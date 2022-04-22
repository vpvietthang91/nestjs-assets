import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssetsManagementModule } from './base-service/assets-management/assets-management.module';
import { DatabaseModule } from './database-service/database.module';
import { AccessoriesManagementModule } from './base-service/accessories-management/accessories-management.module';
import { BaseModule } from './http-service/base-api.module';
import { AssetsManagementProviders } from './base-service/assets-management/assets-management.providers';

@Module({
  imports: [HttpModule, DatabaseModule, AssetsManagementModule, AccessoriesManagementModule, BaseModule],
  controllers: [AppController],
  providers: [AppService,
    ...AssetsManagementProviders,
    ],
})
export class AppModule {}
