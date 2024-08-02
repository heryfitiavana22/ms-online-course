import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { ValidateTokenDto } from './dto/validate-token.dto';
import { LoginAuthDto } from './dto/login-auth.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern('loginAuth')
  login(@Payload() loginAuthDto: LoginAuthDto) {
    return this.authService.login(loginAuthDto);
  }

  @MessagePattern('validateToken')
  async validateToken(data: ValidateTokenDto) {
    return this.authService.validateToken(data.token);
  }
}
