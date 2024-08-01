import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      envFilePath: ['../.env', '.env'],
      ignoreEnvFile: true,
    }),
  ],
})
export class AppModule {}
