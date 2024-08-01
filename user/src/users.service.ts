import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entity/user';

@Injectable()
export class UsersService {
  private users: User[] = [];

  getHello(): string {
    return 'Hello from UserService!';
  }

  create = (createUserDto: CreateUserDto) => {
    const newUser = { id: Date.now(), ...createUserDto };
    this.users.push(newUser);
    return newUser;
  };

  findAll = () => {
    return this.users;
  };

  login = (user: User) => {
    const payload = { username: "ok", sub: user.id, role: user.role };
    return {
      access_token: "okkkk", // TODO
    };
  }

  findOne = (id: number) => {
    return this.users.find((user) => user.id === id);
  };

  update = (id: number, updateUserDto: UpdateUserDto) => {
    return `This action updates a #${id} user`;
  };

  remove = (id: number) => {
    return `This action removes a #${id} user`;
  };
}
