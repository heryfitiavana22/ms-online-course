import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';
import { Enrollment } from './entity/enrollment';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class EnrollmentService {
  private enrollments: Enrollment[] = [{ id: '1', courseId: '1', userId: '1' }];

  getHello(): string {
    return 'Hello from EnrollmentService!';
  }

  create(createEnrollmentDto: CreateEnrollmentDto) {
    const newEnrollment = { id: Date.now().toString(), ...createEnrollmentDto };
    this.enrollments.push(newEnrollment);
    return newEnrollment;
  }

  findAll() {
    return this.enrollments;
  }

  async findOne(id: string) {
    const enrollment = this.enrollments.find((course) => course.id === id);
    if (enrollment) return enrollment;

    throw new RpcException(
      new NotFoundException(`Enrollment with id :${id} not found`),
    );
  }

  findByUserId(userId: string) {
    return this.enrollments.filter(
      (enrollment) => enrollment.userId === userId,
    );
  }

  findByCourseId(courseId: string) {
    return this.enrollments.filter(
      (enrollment) => enrollment.courseId === courseId,
    );
  }

  update(id: string, updateEnrollmentDto: UpdateEnrollmentDto) {
    const courseIndex = this.enrollments.findIndex((course) => course.id == id);
    if (courseIndex !== -1) {
      this.enrollments[courseIndex] = {
        ...this.enrollments[courseIndex],
        ...updateEnrollmentDto,
      };
      return this.enrollments[courseIndex];
    }
    return null;
  }

  remove(id: string) {
    const courseIndex = this.enrollments.findIndex(
      (course) => course.id === id,
    );
    if (courseIndex !== -1) {
      const course = this.enrollments[courseIndex];
      this.enrollments.splice(courseIndex, 1);
      return course;
    }
    return null;
  }
}
