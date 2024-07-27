import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { env } from './config/env';
import { SERVICE_NAME } from './config/service.name';
import { UsersController } from './users/users.controller';
import { CourseController } from './course/course.controller';
import { EnrollmentController } from './enrollment/enrollment.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['../.env', '.env'],
    }),
    ClientsModule.register([
      {
        name: SERVICE_NAME.USER,
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: env.USER_SERVICE_PORT,
        },
      },
      {
        name: SERVICE_NAME.COURSE,
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: env.COURSE_SERVICE_PORT,
        },
      },
      {
        name: SERVICE_NAME.ENROLLMENT,
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: env.ENROLLMENT_SERVICE_PORT,
        },
      },
    ]),
  ],
  controllers: [
    AppController,
    UsersController,
    CourseController,
    EnrollmentController,
  ],
  providers: [AppService],
})
export class AppModule {}
