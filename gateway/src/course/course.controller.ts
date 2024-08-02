import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { SERVICE_NAME } from 'src/config/service.name';
import { ClientProxy } from '@nestjs/microservices';
import { seh } from 'src/helper/service-error-handler';

@Controller('courses')
export class CourseController {
  constructor(
    @Inject(SERVICE_NAME.COURSE)
    private readonly courseServiceClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return seh(this.courseServiceClient.send('createCourse', createCourseDto));
  }

  @Get()
  findAll() {
    return seh(this.courseServiceClient.send('findAllCourse', {}));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return seh(this.courseServiceClient.send('findOneCourse', id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return seh(
      this.courseServiceClient.send('updateCourse', {
        id,
        ...updateCourseDto,
      }),
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return seh(this.courseServiceClient.send('removeCourse', id));
  }
}
