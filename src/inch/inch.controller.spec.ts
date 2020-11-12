import { Test, TestingModule } from '@nestjs/testing';
import { InchController } from './inch.controller';
import { InchService } from './inch.service';

describe('InchController', () => {
  let controller: InchController;
  let service: InchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InchController],
      providers: [
        {
          provide: InchService,
          useFactory: () => ({ convertToCm: jest.fn() }),
        },
      ],
    }).compile();

    controller = module.get<InchController>(InchController);
    service = module.get<InchService>(InchService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('convertToCm()', () => {
    it('should be called service with corrects params', async () => {
      await controller.convertToCm(1);
      expect(service.convertToCm).toBeCalledWith(1);
    });

    it('should be returns when service returns', async () => {
      (service.convertToCm as jest.Mock).mockReturnValue(2.54);
      expect(await controller.convertToCm(1)).toEqual(2.54);
    });
  });
});
