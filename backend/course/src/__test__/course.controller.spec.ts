import { Test, TestingModule } from '@nestjs/testing';
import { CourseController } from '../course.controller';
import { CourseService } from '../course.service';
import { CreateCourseDto } from '../dto/create-course.dto';
import { UpdateCourseDto } from '../dto/update-course.dto';

describe('CourseController', () => {
  let controller: CourseController;
  let service: CourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseController],
      providers: [
        {
          provide: CourseService,
          useValue: {
            create: jest.fn().mockImplementation((dto: CreateCourseDto) => dto),
            findAll: jest.fn().mockReturnValue([]),
            findOne: jest.fn().mockImplementation((id: string) => ({ id })),
            update: jest
              .fn()
              .mockImplementation((id: string, dto: UpdateCourseDto) => ({
                ...dto,
                id,
              })),
            remove: jest.fn().mockReturnValue({}),
          },
        },
      ],
    }).compile();

    controller = module.get<CourseController>(CourseController);
    service = module.get<CourseService>(CourseService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a course', () => {
    const dto: CreateCourseDto = {
      title: 'Test Course',
      description: 'Test Description',
      price: 0,
    };
    expect(controller.create(dto)).toEqual(dto);
    expect(service.create).toHaveBeenCalledWith(dto);
  });

  it('should return all courses', () => {
    expect(controller.findAll()).toEqual([]);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should return a course by ID', () => {
    const id = '1';
    expect(controller.findOne(id)).toEqual({ id });
    expect(service.findOne).toHaveBeenCalledWith(id);
  });

  it('should update a course', () => {
    const dto: UpdateCourseDto = {
      id: '1',
      title: 'Updated Course',
      description: 'Updated Description',
    };
    expect(controller.update(dto)).toEqual(dto);
    expect(service.update).toHaveBeenCalledWith('1', dto);
  });

  it('should remove a course', () => {
    const id = '1';
    expect(controller.remove(id)).toEqual({});
    expect(service.remove).toHaveBeenCalledWith(id);
  });
});
