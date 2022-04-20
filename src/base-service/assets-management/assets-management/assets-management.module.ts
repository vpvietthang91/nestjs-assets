import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database-service/database.module';
import { AssetsManagementController } from './assets-management.controller';
import { AssetsManagementProviders } from './assets-management.providers';
import { AssetsManagementService } from './assets-management.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AssetsManagementController],
  providers: [
    ...AssetsManagementProviders,
    AssetsManagementService]
})
export class AssetsManagementModule {}
