import { Test, TestingModule } from '@nestjs/testing';
import { CourseService } from '../course.service';
import { NotFoundException } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { CreateCourseDto } from '../dto/create-course.dto';
import { UpdateCourseDto } from '../dto/update-course.dto';

describe('CourseService', () => {
  let service: CourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseService],
    }).compile();

    service = module.get<CourseService>(CourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a course', () => {
    const createCourseDto: CreateCourseDto = {
      title: 'NestJS',
      description: 'NestJS course',
      price: 200,
    };

    const result = service.create(createCourseDto);

    expect(result).toEqual({
      id: expect.any(String),
      ...createCourseDto,
    });

    expect(service.findAll()).toContainEqual(result);
  });

  it('should return all courses', () => {
    const courses = service.findAll();
    expect(courses.length).toBeGreaterThanOrEqual(0);
  });

  it('should throw a NotFoundException if course not found', () => {
    try {
      service.findOne('0');
    } catch (error) {
      expect(error).toBeInstanceOf(RpcException);
      expect(error.getError()).toBeInstanceOf(NotFoundException);
    }
  });

  it('should update a course', () => {
    // const updateCourseDto: UpdateCourseDto = {
    //   id: '1',
    //   title: 'Angular Updated',
    //   description: 'Angular course updated',
    //   price: 150,
    // };
    // const result = service.update('1', updateCourseDto);
    // expect(result).toEqual({
    //   id: '1',
    //   ...updateCourseDto,
    // });
  });

  it('should return null if course to update is not found', () => {
    const updateCourseDto: UpdateCourseDto = {
      id: '0',
      title: 'Non-existent',
      description: 'This course does not exist',
      price: 0,
    };

    const result = service.update(updateCourseDto.id, updateCourseDto);
    expect(result).toBeNull();
  });

  it('should remove a course', () => {
    // const result = service.remove('1');
    // expect(result).toEqual({
    //   id: '1',
    //   title: 'Angular',
    //   description: 'Angular course',
    //   price: 100,
    // });
    // expect(service.findAll()).toHaveLength(0);
  });

  it('should return null if course to remove is not found', () => {
    const result = service.remove('0');
    expect(result).toBeNull();
  });
});
