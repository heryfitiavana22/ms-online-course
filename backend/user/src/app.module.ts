import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AdminModule } from './admin/admin.module';
import { InstructorModule } from './instructor/instructor.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['../.env', '.env'],
      ignoreEnvFile: true,
    }),
    AdminModule,
    InstructorModule,
    StudentsModule,
  ],
})
export class AppModule {}
