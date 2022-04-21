import { Test, TestingModule } from '@nestjs/testing';
import { AccessoriesManagementController } from './accessories-management.controller';

describe('AccessoriesManagementController', () => {
  let controller: AccessoriesManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccessoriesManagementController],
    }).compile();

    controller = module.get<AccessoriesManagementController>(AccessoriesManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
