import { NestFactory } from '@nestjs/core';
import { EnrollmentModule } from './enrollment.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { env } from './config/env';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    EnrollmentModule,
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: env.ENROLLMENT_SERVICE_PORT,
      },
    },
  );
  await app.listen();
}
bootstrap();
