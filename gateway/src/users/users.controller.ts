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
import { ClientProxy } from '@nestjs/microservices';
import { SERVICE_NAME } from 'src/config/service.name';
import { seh } from 'src/helper/service-error-handler';

@Controller('users')
export class UsersController {
  constructor(
    @Inject(SERVICE_NAME.USER) private readonly userServiceClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createUserDto: any) {
    return seh(this.userServiceClient.send('createUser', { createUserDto }));
  }

  @Get()
  findAll() {
    return seh(this.userServiceClient.send('findAllUsers', {}));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return seh(this.userServiceClient.send('findOneUser', { id }));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: any) {
    return seh(
      this.userServiceClient.send('updateUser', {
        updateUserDto: {
          id,
          ...updateUserDto,
        },
      }),
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return seh(this.userServiceClient.send('removeUser', { id }));
  }
}
