import {
  ArgumentMetadata,
  PipeTransform,
  ValidationPipe,
} from '@nestjs/common';
import { rcpExpection } from './rcp-expection';

export class RpcValidationPipe extends ValidationPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    try {
      return await super.transform(value, metadata);
    } catch (error) {
      throw rcpExpection(error);
    }
  }
}
