import { NestFactory } from '@nestjs/core';
import { CourseModule } from './course.module';
import { env } from './config/env';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    CourseModule,
    {
      transport: Transport.TCP,
      options: {
        host: env.COURSE_SERVICE_HOST,
        port: env.COURSE_SERVICE_PORT,
      },
    },
  );
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  await app.listen();
}
bootstrap();
