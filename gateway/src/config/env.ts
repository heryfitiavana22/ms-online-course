import { plainToClass } from 'class-transformer';
import { validateSync, IsString, IsInt } from 'class-validator';
import * as dotenv from 'dotenv';

dotenv.config({
  path: ['../.env', '.env'],
});

class EnvironmentVariables {
  @IsString()
  BASE_URI: string;

  @IsInt()
  GATEWAY_PORT: number;

  @IsInt()
  ENROLLMENT_SERVICE_PORT: number;

  @IsInt()
  COURSE_SERVICE_PORT: number;

  @IsInt()
  USER_SERVICE_PORT: number;
}

export const env = plainToClass(EnvironmentVariables, process.env, {
  enableImplicitConversion: true,
});

const errors = validateSync(env);
if (errors.length > 0) {
  throw new Error(errors.toString());
}
