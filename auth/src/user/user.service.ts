import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class UserService {
  private readonly users = [
    {
      id: '1',
      email: 'john@gmail.com',
      password: 'changeme',
    },
    {
      id: '2',
      email: 'maria@gmail.com',
      password: 'guess',
    },
  ];

  async findOne(email: string) {
    const users = this.users.find((user) => user.email === email);
    if (users) return users;

    throw new RpcException(
      new NotFoundException(`User with email : ${email} not found`),
    );
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
