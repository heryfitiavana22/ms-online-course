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
import { AuthController } from './auth/auth.controller';
import { APP_GUARD } from '@nestjs/core';
import { AuthenticatedGuard } from './auth/guard/authenticated.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['../.env', '.env'],
      ignoreEnvFile: true,
    }),
    ClientsModule.register([
      {
        name: SERVICE_NAME.USER,
        transport: Transport.TCP,
        options: {
          host: env.USER_SERVICE_HOST,
          port: env.USER_SERVICE_PORT,
        },
      },
      {
        name: SERVICE_NAME.COURSE,
        transport: Transport.TCP,
        options: {
          host: env.COURSE_SERVICE_HOST,
          port: env.COURSE_SERVICE_PORT,
        },
      },
      {
        name: SERVICE_NAME.ENROLLMENT,
        transport: Transport.TCP,
        options: {
          host: env.ENROLLMENT_SERVICE_HOST,
          port: env.ENROLLMENT_SERVICE_PORT,
        },
      },
      {
        name: SERVICE_NAME.AUTH,
        transport: Transport.TCP,
        options: {
          host: env.AUTH_SERVICE_HOST,
          port: env.AUTH_SERVICE_PORT,
        },
      },
    ]),
  ],
  controllers: [
    AppController,
    UsersController,
    CourseController,
    EnrollmentController,
    AuthController,
  ],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthenticatedGuard,
    },
  ],
})
export class AppModule {}
