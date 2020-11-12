import { Test, TestingModule } from '@nestjs/testing';
import { InchService } from './inch.service';

describe('InchService', () => {
  let service: InchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InchService],
    }).compile();

    service = module.get<InchService>(InchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('convertToCm()', () => {
    it('should be throw if called with valid params', () => {
      expect(service.convertToCm(-1)).rejects.toThrow();
    });

    it('should be if called with valid params', () => {
      expect(service.convertToCm(1)).resolves.not.toThrow();
    });
  });
});
