import { NestFactory } from '@nestjs/core';
import { CourseModule } from './course.module';
import { env } from './config/env';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { RpcValidationPipe } from './helpers/rpc-validation.pipe';

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
  app.useGlobalPipes(new RpcValidationPipe({ transform: true, whitelist: true }));
  await app.listen();
}
bootstrap();
