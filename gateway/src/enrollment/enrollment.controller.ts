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
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';
import { SERVICE_NAME } from 'src/config/service.name';
import { ClientProxy } from '@nestjs/microservices';

@Controller('enrollment')
export class EnrollmentController {
  constructor(
    @Inject(SERVICE_NAME.ENROLLMENT)
    private readonly enrollmentServiceClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createEnrollmentDto: CreateEnrollmentDto) {
    return {};
  }

  @Get()
  findAll() {
    return this.enrollmentServiceClient.send('findAllEnrollment', {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return {};
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEnrollmentDto: UpdateEnrollmentDto,
  ) {
    return {};
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return {};
  }
}
