import { ApiProperty } from '@nestjs/swagger';

export class AuthRequest {
  @ApiProperty({ nullable: true })
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
