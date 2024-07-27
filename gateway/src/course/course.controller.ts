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
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { SERVICE_NAME } from 'src/config/service.name';
import { ClientProxy } from '@nestjs/microservices';

@Controller('course')
export class CourseController {
  constructor(
    @Inject(SERVICE_NAME.COURSE)
    private readonly courseServiceClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return {};
  }

  @Get()
  findAll() {
    return this.courseServiceClient.send('findAllCourse', {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return {};
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return {};
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return {};
  }
}
