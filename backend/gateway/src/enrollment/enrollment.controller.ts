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
  async create(@Body() createEnrollmentDto: any) {
    const { studentId, courseId } = createEnrollmentDto;

    const student = await lastValueFrom(
      seh(this.userClient.send('findOneStudent', { id: studentId })),
    );
    const course = await lastValueFrom(
      seh(this.courseClient.send('findOneCourse', { id: courseId })),
    );
    return seh(
      this.enrollmentClient.send('createEnrollment', { createEnrollmentDto }),
    );
  }

  @Get()
  async findAll() {
    const enrollments = await lastValueFrom(
      seh(this.enrollmentClient.send('findAllEnrollment', {})),
    );

    const enrichedEnrollments = await Promise.all(
      enrollments.map(async (enrollment: any) => {
        const user = await lastValueFrom(
          seh(
            this.userClient.send('findOneStudent', { id: enrollment.studentId }),
          ),
        );
        const course = await lastValueFrom(
          seh(
            this.courseClient.send('findOneCourse', {
              id: enrollment.courseId,
            }),
          ),
        );

        return { ...enrollment, user, course };
      }),
    );
    return enrichedEnrollments;
  }

  @Get(':id')
  async findOne(@Param('id') enrollmentId: string) {
    const enrollment = await lastValueFrom(
      seh(
        this.enrollmentClient.send('findOneEnrollment', { id: enrollmentId }),
      ),
    );
    const user = await lastValueFrom(
      seh(this.userClient.send('findOneStudent', { id: enrollment.studentId })),
    );
    const course = await lastValueFrom(
      seh(this.courseClient.send('findOneCourse', { id: enrollment.courseId })),
    );

    return { ...enrollment, user, course };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnrollmentDto: any) {
    return seh(
      this.enrollmentClient.send('updateEnrollment', {
        updateEnrollmentDto: {
          id,
          ...updateEnrollmentDto,
        },
      }),
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return seh(this.enrollmentClient.send('removeEnrollment', { id }));
  }
}
