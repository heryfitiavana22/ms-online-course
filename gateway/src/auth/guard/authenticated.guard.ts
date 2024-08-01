import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { env } from '../../config/env';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../public.decorator';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  private client: ClientProxy;

  constructor(private reflector: Reflector) {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: { host: env.AUTH_SERVICE_HOST, port: env.AUTH_SERVICE_PORT },
    });
  }

  async canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true;

    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];

    if (!token) throw new UnauthorizedException('Token missing');

    const user = await this.client.send('validateToken', { token }).toPromise();

    if (!user) throw new UnauthorizedException('Token invalid');
    request.user = user;

    return true;
  }
}
