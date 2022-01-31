import { Test, TestingModule } from '@nestjs/testing';
import { AltController } from './alt.controller';
import { AltService } from './alt.service';

describe('AppController', () => {
  let altController: AltController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AltController],
      providers: [AltService],
    }).compile();

    altController = app.get<AltController>(AltController);
  });

  describe('root', () => {
    it('should return "Hello Alternative!"', () => {
      expect(altController.getAlt()).toBe('Hello Alternative!');
    });
  });
});
