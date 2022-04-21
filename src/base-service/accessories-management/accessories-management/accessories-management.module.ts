import { Module } from '@nestjs/common';
import { AccessoriesManagementController } from './accessories-management.controller';
import { AccessoriesManagementService } from './accessories-management.service';

@Module({
  controllers: [AccessoriesManagementController],
  providers: [AccessoriesManagementService]
})
export class AccessoriesManagementModule {}
