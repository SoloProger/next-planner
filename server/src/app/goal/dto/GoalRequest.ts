import { ApiProperty } from '@nestjs/swagger';

export class GoalRequestDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  currentAmount: number;

  @ApiProperty()
  totalAmount: number;
}
