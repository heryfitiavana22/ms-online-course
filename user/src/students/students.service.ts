import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import { ROLE } from 'src/users/entity/user';
import { rcpExpection } from 'src/helpers/rcp-expection';

@Injectable()
export class StudentsService {
  private students: Student[] = [
    {
      id: '1',
      name: 'Hery',
      email: 'hery@gmail.com',
      password: 'password',
      role: ROLE.STUDENT,
    },
  ];

  create = (createStudentDto: CreateStudentDto) => {
    const newStudent = { id: Date.now().toString(), ...createStudentDto };
    this.students.push(newStudent);
    return newStudent;
  };

  findAll = () => {
    return this.students;
  };

  findOne = (id: string) => {
    const students = this.students.find((user) => user.id === id);
    if (students) return students;

    throw rcpExpection(
      new NotFoundException(`Student with id : ${id} not found`),
    );
  };

  update = (id: string, updateStudentDto: UpdateStudentDto) => {
    const courseIndex = this.students.findIndex((course) => course.id == id);
    if (courseIndex !== -1) {
      this.students[courseIndex] = {
        ...this.students[courseIndex],
        ...updateStudentDto,
      };
      return this.students[courseIndex];
    }
    return null;
  };

  remove = (id: string) => {
    const courseIndex = this.students.findIndex((course) => course.id === id);
    if (courseIndex !== -1) {
      const course = this.students[courseIndex];
      this.students.splice(courseIndex, 1);
      return course;
    }
    return null;
  };
}
