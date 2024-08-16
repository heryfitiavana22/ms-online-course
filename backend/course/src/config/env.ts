import { plainToClass } from 'class-transformer';
import { validateSync, IsInt, IsString } from 'class-validator';

class EnvironmentVariables {
  @IsInt()
  COURSE_SERVICE_PORT: number;

  @IsString()
  COURSE_SERVICE_HOST: string;
}

export const env = plainToClass(EnvironmentVariables, process.env, {
  enableImplicitConversion: true,
});

const errors = validateSync(env);
if (errors.length > 0) {
  throw new Error(errors.toString());
}
