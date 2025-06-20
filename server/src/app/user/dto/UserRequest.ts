import { ApiProperty } from '@nestjs/swagger';

export class UserRequest {
  @ApiProperty()
  email: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  password: string;
}
