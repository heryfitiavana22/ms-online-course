import { Controller } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';

@Controller('')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @MessagePattern('getHello')
  getHello(): string {
    return this.enrollmentService.getHello();
  }

  @MessagePattern('createEnrollment')
  create(@Payload() createEnrollmentDto: CreateEnrollmentDto) {
    return this.enrollmentService.create(createEnrollmentDto);
  }

  @MessagePattern('findAllEnrollment')
  findAll() {
    return this.enrollmentService.findAll();
  }

  @MessagePattern('findOneEnrollment')
  findOne(@Payload() id: number) {
    return this.enrollmentService.findOne(id);
  }

  @MessagePattern('updateEnrollment')
  update(@Payload() updateEnrollmentDto: UpdateEnrollmentDto) {
    return this.enrollmentService.update(
      updateEnrollmentDto.id,
      updateEnrollmentDto,
    );
  }

  @MessagePattern('removeEnrollment')
  remove(@Payload() id: number) {
    return this.enrollmentService.remove(id);
  }
}
