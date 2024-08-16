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
import { SERVICE_NAME } from 'src/config/service.name';
import { ClientProxy } from '@nestjs/microservices';
import { seh } from 'src/helper/service-error-handler';
import { User } from 'src/helper/user.decorator';

@Controller('courses')
export class CourseController {
  constructor(
    @Inject(SERVICE_NAME.COURSE)
    private readonly courseServiceClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createCourseDto: any, @User() user: any) {
    return seh(
      this.courseServiceClient.send('createCourse', { createCourseDto, user }),
    );
  }

  @Get()
  findAll(@User() user: any) {
    return seh(this.courseServiceClient.send('findAllCourse', { user }));
  }

  @Get(':id')
  findOne(@Param('id') id: string, @User() user: any) {
    return seh(this.courseServiceClient.send('findOneCourse', { id, user }));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCourseDto: any,
    @User() user: any,
  ) {
    return seh(
      this.courseServiceClient.send('updateCourse', {
        updateCourseDto: {
          id,
          ...updateCourseDto,
        },
        user,
      }),
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string, @User() user: any) {
    return seh(this.courseServiceClient.send('removeCourse', { id, user }));
  }
}
