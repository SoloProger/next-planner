import { ApiProperty } from '@nestjs/swagger';
import { UserResponse } from '../../user/dto/UserResponse';

export class AuthResponse {
  @ApiProperty({ type: UserResponse })
  user: UserResponse;

  @ApiProperty()
  token: string;
}
