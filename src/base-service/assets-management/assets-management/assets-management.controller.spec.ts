import { Test, TestingModule } from '@nestjs/testing';
import { AssetsManagementController } from './assets-management.controller';

describe('AssetsManagementController', () => {
  let controller: AssetsManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssetsManagementController],
    }).compile();

    controller = module.get<AssetsManagementController>(AssetsManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
