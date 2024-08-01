import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  private readonly users = [
    {
      id: 1,
      email: 'john',
      password: 'changeme',
    },
    {
      id: 2,
      email: 'maria',
      password: 'guess',
    },
  ];

  async findOne(email: string) {
    return this.users.find((user) => user.email === email);
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
