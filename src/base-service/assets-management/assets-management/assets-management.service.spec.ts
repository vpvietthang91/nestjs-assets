import { Test, TestingModule } from '@nestjs/testing';
import { AssetsManagementService } from './assets-management.service';

describe('AssetsManagementService', () => {
  let service: AssetsManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssetsManagementService],
    }).compile();

    service = module.get<AssetsManagementService>(AssetsManagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
