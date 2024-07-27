import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ClientProxy } from '@nestjs/microservices';
import { SERVICE_NAME } from 'src/config/service.name';

@Controller('users')
export class UsersController {
  constructor(
    @Inject(SERVICE_NAME.USER) private readonly userServiceClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return {};
  }

  @Get()
  findAll() {
    return this.userServiceClient.send('findAllUsers', {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return {};
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return {};
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return {};
  }
}
