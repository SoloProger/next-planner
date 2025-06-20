import { ApiProperty } from '@nestjs/swagger';

export class GoalResponseDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  currentAmount: number;

  @ApiProperty()
  totalAmount: number;
}
