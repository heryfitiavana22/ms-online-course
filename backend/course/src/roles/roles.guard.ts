import {
  Injectable,
  CanActivate,
  ExecutionContext,
  BadRequestException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLE } from './role';
import { ROLES_KEY } from './roles.decorator';
import { RpcException } from '@nestjs/microservices';
import { rcpExpection } from 'src/helpers/rcp-expection';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<ROLE[]>(ROLES_KEY, context.getHandler());
    if (!roles) return true;

    const data = context.switchToRpc().getData();
    const user = data.user;

    if (!user)
      throw rcpExpection(
        new BadRequestException(
          'User not found, includes user in payload from "gateway" to "course service"',
        ),
      );

    if (roles.includes(user.role)) return true;

    throw rcpExpection(
      new BadRequestException(
        'You are not authorized to access this resource.',
      ),
    );
  }
}
