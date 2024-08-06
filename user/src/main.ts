import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { env } from './config/env';
import { ValidationPipe } from '@nestjs/common';
import { RpcValidationPipe } from './helpers/rpc-validation.pipe';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UsersModule,
    {
      transport: Transport.TCP,
      options: {
        host: env.USER_SERVICE_HOST,
        port: env.USER_SERVICE_PORT,
      },
    },
  );
  app.useGlobalPipes(new RpcValidationPipe({ transform: true, whitelist: true }));
  await app.listen();
}
bootstrap();
