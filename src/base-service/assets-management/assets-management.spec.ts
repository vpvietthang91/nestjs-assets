import { Test, TestingModule } from '@nestjs/testing';
import { AssetsManagement } from './assets-management';

describe('AssetsManagement', () => {
  let provider: AssetsManagement;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssetsManagement],
    }).compile();

    provider = module.get<AssetsManagement>(AssetsManagement);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
