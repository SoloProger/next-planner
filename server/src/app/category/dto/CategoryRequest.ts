import { ApiProperty } from '@nestjs/swagger';

export class CategoryRequestDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;
}
