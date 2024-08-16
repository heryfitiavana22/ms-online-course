import { NestFactory } from '@nestjs/core';
import { EnrollmentModule } from './enrollment.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { env } from './config/env';
import { RpcValidationPipe } from './helpers/rpc-validation.pipe';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    EnrollmentModule,
    {
      transport: Transport.TCP,
      options: {
        host: env.ENROLLMENT_SERVICE_HOST,
        port: env.ENROLLMENT_SERVICE_PORT,
      },
    },
  );
  app.useGlobalPipes(new RpcValidationPipe({ transform: true, whitelist: true }));
  await app.listen();
}
bootstrap();
