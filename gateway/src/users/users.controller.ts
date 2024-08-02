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
import { seh } from 'src/helper/service-error-handler';

@Controller('users')
export class UsersController {
  constructor(
    @Inject(SERVICE_NAME.USER) private readonly userServiceClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return seh(this.userServiceClient.send('createUser', createUserDto));
  }

  @Get()
  findAll() {
    return seh(this.userServiceClient.send('findAllUsers', {}));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return seh(this.userServiceClient.send('findOneUser', id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return seh(
      this.userServiceClient.send('updateUser', {
        id,
        ...updateUserDto,
      }),
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return seh(this.userServiceClient.send('removeUser', id));
  }
}
