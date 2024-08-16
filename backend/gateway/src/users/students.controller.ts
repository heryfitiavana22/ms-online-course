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
export class StudentsController {
  constructor(
    @Inject(SERVICE_NAME.USER) private readonly userServiceClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createStudentDto: any) {
    return seh(
      this.userServiceClient.send('createStudent', { createStudentDto }),
    );
  }

  @Get()
  findAll() {
    return seh(this.userServiceClient.send('findAllStudents', {}));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return seh(this.userServiceClient.send('findOneStudent', { id }));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: any) {
    return seh(
      this.userServiceClient.send('updateStudent', {
        updateStudentDto: {
          id,
          ...updateStudentDto,
        },
      }),
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return seh(this.userServiceClient.send('removeStudent', { id }));
  }
}
