import { Controller } from '@nestjs/common';
import { CourseService } from './course.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { ROLE } from './roles/role';
import { Roles } from './roles/roles.decorator';

@Controller('')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Roles(ROLE.ADMIN, ROLE.INSTRUCTOR)
  @MessagePattern('createCourse')
  create(@Payload('createCourseDto') createCourseDto: CreateCourseDto) {
    return this.courseService.create(createCourseDto);
  }

  @MessagePattern('findAllCourse')
  findAll() {
    return this.courseService.findAll();
  }

  @MessagePattern('findOneCourse')
  findOne(@Payload('id') id: string) {
    return this.courseService.findOne(id);
  }

  @Roles(ROLE.ADMIN, ROLE.INSTRUCTOR)
  @MessagePattern('updateCourse')
  update(@Payload('updateCourseDto') updateCourseDto: UpdateCourseDto) {
    return this.courseService.update(updateCourseDto.id, updateCourseDto);
  }

  @Roles(ROLE.ADMIN, ROLE.INSTRUCTOR)
  @MessagePattern('removeCourse')
  remove(@Payload('id') id: string) {
    return this.courseService.remove(id);
  }
}
