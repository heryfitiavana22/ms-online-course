import { Test, TestingModule } from '@nestjs/testing';
import { EnrollmentController } from './enrollment.controller';
import { EnrollmentService } from './enrollment.service';

describe('EnrollmentController', () => {
  let appController: EnrollmentController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EnrollmentController],
      providers: [EnrollmentService],
    }).compile();

    appController = app.get<EnrollmentController>(EnrollmentController);
  });

  describe('root', () => {
    it('should return "Hello from EnrollmentService!"', () => {
      expect(appController.getHello()).toBe('Hello from EnrollmentService!');
    });
  });
});
