import { plainToClass } from 'class-transformer';
import { validateSync, IsInt } from 'class-validator';

class EnvironmentVariables {
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
