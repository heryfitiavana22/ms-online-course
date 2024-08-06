import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/entities/user.entity';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string) {
    const user = await this.usersService.findOne(email);
    if (user && user.password === pass) return this.publicUser(user);
    return null;
  }

  async login(loginAuthDto: LoginAuthDto) {
    const user = await this.validateUser(
      loginAuthDto.email,
      loginAuthDto.password,
    );
    if (!user)
      throw new RpcException(new UnauthorizedException('Invalid credentials'));

    const payload = { email: user.email, sub: user.id, role: user.role };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateToken(token: string) {
    try {
      const decoded = this.jwtService.verify(token);
      const user = await this.usersService.findOne(decoded.email);
      if (!user) return null;

      return this.publicUser(user);
    } catch (error) {
      return null;
    }
  }

  private publicUser(user: User) {
    const { password, ...result } = user;
    return result;
  }
}
