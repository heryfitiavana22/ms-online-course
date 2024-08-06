import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ROLE, User } from './entity/user';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: '1',
      name: 'Hery',
      email: 'hery@gmail.com',
      password: 'password',
      role: ROLE.ADMIN,
    },
  ];

  getHello(): string {
    return 'Hello from UserService!';
  }

  create = (createUserDto: CreateUserDto) => {
    const newUser = { id: Date.now().toString(), ...createUserDto };
    this.users.push(newUser);
    return newUser;
  };

  findAll = () => {
    return this.users;
  };

  findOne = (id: string) => {
    const users = this.users.find((user) => user.id === id);
    if (users) return users;

    throw new RpcException(
      new NotFoundException(`User with id : ${id} not found`),
    );
  };

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
