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
import { seh } from 'src/helper/service-error-handler';
import { lastValueFrom } from 'rxjs';

@Controller('enrollments')
export class EnrollmentController {
  constructor(
    @Inject(SERVICE_NAME.ENROLLMENT)
    private readonly enrollmentClient: ClientProxy,
    @Inject(SERVICE_NAME.USER) private readonly userClient: ClientProxy,
    @Inject(SERVICE_NAME.COURSE) private readonly courseClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createEnrollmentDto: CreateEnrollmentDto) {
    return seh(
      this.enrollmentClient.send('createEnrollment', createEnrollmentDto),
    );
  }

  @Get()
  findAll() {
    return seh(this.enrollmentClient.send('findAllEnrollments', {}));
  }

  @Get(':id')
  async findOne(@Param('id') enrollmentId: string) {
    const enrollment = await lastValueFrom(
      seh(this.enrollmentClient.send('findOneEnrollment', enrollmentId)),
    );
    const user = await lastValueFrom(
      seh(this.userClient.send('findOneUser', enrollment.userId)),
    );
    const course = await lastValueFrom(
      seh(this.courseClient.send('findOneCourse', enrollment.courseId)),
    );

    return { ...enrollment, user, course };
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEnrollmentDto: UpdateEnrollmentDto,
  ) {
    return seh(
      this.enrollmentClient.send('updateEnrollment', {
        id,
        ...updateEnrollmentDto,
      }),
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return seh(this.enrollmentClient.send('removeEnrollment', id));
  }
}
