import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { UserRepository } from '../user/repositories/user.repository';
import { JwtService } from '@nestjs/jwt';
import { AuthRequest } from './dto/AuthRequest';
import * as bcrypt from 'bcrypt';
import { AuthResponse } from './dto/AuthResponse';
import { Public } from './decorators/public.decorator';

@ApiTags('Auth')
@Controller('auth')
@Public()
export class AuthController {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  @ApiCreatedResponse({
    description: 'Возвращает пользователя и токен',
    type: AuthResponse,
  })
  @Post('login')
  public async login(@Body() requestBody: AuthRequest): Promise<AuthResponse> {
    const user = await this.userRepository.getUserByEmail(requestBody.email);

    if (!user) {
      throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);
    }

    const passwordMatch = await bcrypt.compare(
      requestBody.password,
      user.password,
    );

    if (!passwordMatch) {
      throw new HttpException('Неверные пароль', HttpStatus.FORBIDDEN);
    }

    const payload = { id: user.id, email: user.email, name: user.name };

    return {
      user: payload,
      token: await this.jwtService.signAsync(payload),
    };
  }

  @ApiCreatedResponse({
    description: 'Возвращает пользователя и токен',
    type: AuthResponse,
  })
  @Post('register')
  public async registration(
    @Body() requestBody: AuthRequest,
  ): Promise<AuthResponse> {
    const password = await bcrypt.hash(requestBody.password, 10);

    const user = await this.userRepository.addUser({
      ...requestBody,
      password,
    });

    const payload = { id: user.id, email: user.email, name: user.name };

    return {
      user: payload,
      token: await this.jwtService.signAsync(payload),
    };
  }
}
