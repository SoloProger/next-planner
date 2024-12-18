import { ApiProperty } from '@nestjs/swagger';
import { RecordType } from 'src/database/enums/RecordType';

export class RecordRequestDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  count: number;

  @ApiProperty({ enum: RecordType })
  recordType: RecordType;
}
