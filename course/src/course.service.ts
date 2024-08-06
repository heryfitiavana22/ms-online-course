import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entity/course';
import { rcpExpection } from './helpers/rcp-expection';

@Injectable()
export class CourseService {
  private courses: Course[] = [
    { id: '1', title: 'Angular', description: 'Angular course', price: 100 },
  ];

  getHello(): string {
    return 'Hello from CourseService!';
  }

  create(createCourseDto: CreateCourseDto) {
    const newCourse = { id: Date.now().toString(), ...createCourseDto };
    this.courses.push(newCourse);
    return newCourse;
  }

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    const courses = this.courses.find((course) => course.id === id);
    if (courses) return courses;

    throw rcpExpection(
      new NotFoundException(`Course with id : ${id} not found`),
    );
  }

  update(id: string, updateCourseDto: UpdateCourseDto) {
    const courseIndex = this.courses.findIndex((course) => course.id == id);
    if (courseIndex !== -1) {
      this.courses[courseIndex] = {
        ...this.courses[courseIndex],
        ...updateCourseDto,
      };
      return this.courses[courseIndex];
    }
    return null;
  }

  remove(id: string) {
    const courseIndex = this.courses.findIndex((course) => course.id === id);
    if (courseIndex !== -1) {
      const course = this.courses[courseIndex];
      this.courses.splice(courseIndex, 1);
      return course;
    }
    return null;
  }
}
