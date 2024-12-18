import { ConfigService } from '@nestjs/config';

export function jwtConfig(configService: ConfigService) {
  return {
    global: true,
    secret: configService.get('SECRET'),
    signOptions: { expiresIn: '24h' },
  };
}
