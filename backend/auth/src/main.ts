import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { env } from './config/env';
import { AppModule } from './app.module';
import { RpcValidationPipe } from './helpers/rpc-validation.pipe';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: env.AUTH_SERVICE_HOST,
        port: env.AUTH_SERVICE_PORT,
      },
    },
  );
  app.useGlobalPipes(
    new RpcValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );
  await app.listen();
}
bootstrap();
