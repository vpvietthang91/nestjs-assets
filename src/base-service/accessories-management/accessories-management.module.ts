import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database-service/database.module';
import { AccessoriesManagementController } from './accessories-management.controller';
import { AccessoriesManagementProviders } from './accessories-management.providers';
import { AccessoriesManagementService } from './accessories-management.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AccessoriesManagementController],
  providers: [
    ...AccessoriesManagementProviders,
    AccessoriesManagementService]
})
export class AccessoriesManagementModule {}
