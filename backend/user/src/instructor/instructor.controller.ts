import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { InstructorService } from './instructor.service';
import { CreateInstructorDto } from './dto/create-instructor.dto';
import { UpdateInstructorDto } from './dto/update-instructor.dto';

@Controller()
export class InstructorController {
  constructor(private readonly instructorService: InstructorService) {}

  @MessagePattern('createInstructor')
  create(
    @Payload('createInstructorDto') createInstructorDto: CreateInstructorDto,
  ) {
    return this.instructorService.create(createInstructorDto);
  }

  @MessagePattern('findAllInstructor')
  findAll() {
    return this.instructorService.findAll();
  }

  @MessagePattern('findOneInstructor')
  findOne(@Payload('id') id: string) {
    return this.instructorService.findOne(id);
  }

  @MessagePattern('updateInstructor')
  update(
    @Payload('updateInstructorDto') updateInstructorDto: UpdateInstructorDto,
  ) {
    return this.instructorService.update(
      updateInstructorDto.id,
      updateInstructorDto,
    );
  }

  @MessagePattern('removeInstructor')
  remove(@Payload('id') id: string) {
    return this.instructorService.remove(id);
  }
}
