import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern('loginAuth')
  login(@Payload() loginAuthDto: any) {
    return this.authService.login(loginAuthDto);
  }

  @MessagePattern('createAuth')
  create(@Payload() createAuthDto: any) {
    return {};
  }

  @MessagePattern('validateToken')
  async validateToken(data: { token: string }) {
    return this.authService.validateToken(data.token);
  }

  @MessagePattern('findAllAuth')
  findAll() {
    return {};
  }
}
