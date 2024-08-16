import { plainToClass } from 'class-transformer';
import { validateSync, IsString, IsInt } from 'class-validator';
import * as dotenv from 'dotenv';

dotenv.config({
  path: ['../.env', '.env'],
});

class EnvironmentVariables {
  @IsString()
  BASE_URI: string;

  @IsString()
  HOST: string;

  @IsInt()
  GATEWAY_PORT: number;

  @IsInt()
  ENROLLMENT_SERVICE_PORT: number;

  @IsString()
  ENROLLMENT_SERVICE_HOST: string;

  @IsInt()
  COURSE_SERVICE_PORT: number;

  @IsString()
  COURSE_SERVICE_HOST: string;

  @IsInt()
  USER_SERVICE_PORT: number;

  @IsString()
  USER_SERVICE_HOST: string;

  @IsInt()
  AUTH_SERVICE_PORT: number;

  @IsString()
  AUTH_SERVICE_HOST: string;

  @IsString()
  JWT_SECRET: string;
}

export const env = plainToClass(EnvironmentVariables, process.env, {
  enableImplicitConversion: true,
});

const errors = validateSync(env);
if (errors.length > 0) {
  throw new Error(errors.toString());
}
