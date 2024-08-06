import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RpcException } from '@nestjs/microservices';
import { ROLE, User } from './entities/user.entity';

@Injectable()
export class UserService {
  private readonly users: User[] = [
    {
      id: '1',
      email: 'hery@gmail.com',
      password: 'password',
      role: ROLE.ADMIN,
    },
    {
      id: '2',
      email: 'maria@gmail.com',
      password: 'guess',
      role: ROLE.STUDENT,
    },
  ];

  findAll = () => {
    return this.users;
  };

  async findOne(email: string) {
    const users = this.users.find((user) => user.email === email);
    if (users) return users;

    throw new RpcException(
      new NotFoundException(`User with email : ${email} not found`),
    );
  }

  create(createUserDto: CreateUserDto) {
    const newUser = { id: Date.now().toString(), ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }

  update = (id: string, updateUserDto: UpdateUserDto) => {
    const courseIndex = this.users.findIndex((course) => course.id == id);
    if (courseIndex !== -1) {
      this.users[courseIndex] = {
        ...this.users[courseIndex],
        ...updateUserDto,
      };
      return this.users[courseIndex];
    }
    return null;
  };

  remove = (id: string) => {
    const courseIndex = this.users.findIndex((course) => course.id === id);
    if (courseIndex !== -1) {
      const course = this.users[courseIndex];
      this.users.splice(courseIndex, 1);
      return course;
    }
    return null;
  };
}
