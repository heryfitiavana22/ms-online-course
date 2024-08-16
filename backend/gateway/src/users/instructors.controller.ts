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

@Controller('instructors')
export class InstructorController {
  constructor(
    @Inject(SERVICE_NAME.USER) private readonly userServiceClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createInstructorDto: any) {
    return seh(
      this.userServiceClient.send('createInstructor', { createInstructorDto }),
    );
  }

  @Get()
  findAll() {
    return seh(this.userServiceClient.send('findAllInstructor', {}));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return seh(this.userServiceClient.send('findOneInstructor', { id }));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInstructorDto: any) {
    return seh(
      this.userServiceClient.send('updateInstructor', {
        updateInstructorDto: {
          id,
          ...updateInstructorDto,
        },
      }),
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return seh(this.userServiceClient.send('removeInstructor', { id }));
  }
}
