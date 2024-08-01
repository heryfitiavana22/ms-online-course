import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { env } from './config/env';

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
  await app.listen();
}
bootstrap();
