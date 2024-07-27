import { Test, TestingModule } from '@nestjs/testing';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';

describe('CourseController', () => {
  let appController: CourseController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CourseController],
      providers: [CourseService],
    }).compile();

    appController = app.get<CourseController>(CourseController);
  });

  describe('root', () => {
    it('should return "Hello from CourseService!"', () => {
      expect(appController.getHello()).toBe('Hello from CourseService!');
    });
  });
});
