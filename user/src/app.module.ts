import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AdminModule } from './admin/admin.module';
import { InstructorModule } from './instructor/instructor.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['../.env', '.env'],
      ignoreEnvFile: true,
    }),
    UsersModule,
    AdminModule,
    InstructorModule,
    StudentsModule,
  ],
})
export class AppModule {}
