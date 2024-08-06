import { HttpException } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

export function rcpExpection(error: HttpException) {
  return new RpcException(error);
}
