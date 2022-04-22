import { Test, TestingModule } from '@nestjs/testing';
import { AccessoriesManagementService } from './accessories-management.service';

describe('AccessoriesManagementService', () => {
  let service: AccessoriesManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccessoriesManagementService],
    }).compile();

    service = module.get<AccessoriesManagementService>(AccessoriesManagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
