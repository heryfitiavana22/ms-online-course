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

@Controller('enrollment')
export class EnrollmentController {
  constructor(
    @Inject(SERVICE_NAME.ENROLLMENT)
    private readonly enrollmentServiceClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createEnrollmentDto: CreateEnrollmentDto) {
    return seh(
      this.enrollmentServiceClient.send(
        'createEnrollment',
        createEnrollmentDto,
      ),
    );
  }

  @Get()
  findAll() {
    return seh(this.enrollmentServiceClient.send('findAllEnrollments', {}));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return seh(this.enrollmentServiceClient.send('findOneEnrollment', id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEnrollmentDto: UpdateEnrollmentDto,
  ) {
    return seh(
      this.enrollmentServiceClient.send('updateEnrollment', {
        id,
        ...updateEnrollmentDto,
      }),
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return seh(this.enrollmentServiceClient.send('removeEnrollment', id));
  }
}
