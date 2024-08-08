import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInstructorDto } from './dto/create-instructor.dto';
import { UpdateInstructorDto } from './dto/update-instructor.dto';
import { Instructor, State } from './entities/instructor.entity';
import { ROLE } from 'src/users/entity/user';
import { rcpExpection } from 'src/helpers/rcp-expection';

@Injectable()
export class InstructorService {
  private instructors: Instructor[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: 'password',
      role: ROLE.INSTRUCTOR,
      state: State.VALIDATED,
    },
  ];

  create = (createInstructorDto: CreateInstructorDto) => {
    const newInstructor = { id: Date.now().toString(), ...createInstructorDto };
    this.instructors.push(newInstructor);
    return newInstructor;
  };

  findAll = () => {
    return this.instructors;
  };

  findOne = (id: string) => {
    const instructors = this.instructors.find((user) => user.id === id);
    if (instructors) return instructors;

    throw rcpExpection(
      new NotFoundException(`Instructor with id : ${id} not found`),
    );
  };

  update = (id: string, updateInstructorDto: UpdateInstructorDto) => {
    const courseIndex = this.instructors.findIndex((course) => course.id == id);
    if (courseIndex !== -1) {
      this.instructors[courseIndex] = {
        ...this.instructors[courseIndex],
        ...updateInstructorDto,
      };
      return this.instructors[courseIndex];
    }
    return null;
  };

  remove = (id: string) => {
    const courseIndex = this.instructors.findIndex(
      (course) => course.id === id,
    );
    if (courseIndex !== -1) {
      const course = this.instructors[courseIndex];
      this.instructors.splice(courseIndex, 1);
      return course;
    }
    return null;
  };
}
