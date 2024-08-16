import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { ConfigModule } from '@nestjs/config';
import { RolesGuard } from './roles/roles.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['../.env', '.env'],
      ignoreEnvFile: true,
    }),
  ],
  controllers: [CourseController],
  providers: [
    CourseService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class CourseModule {}
