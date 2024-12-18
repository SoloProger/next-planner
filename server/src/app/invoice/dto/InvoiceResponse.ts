import { ApiProperty } from '@nestjs/swagger';
import { Currency } from 'src/database/enums/Currency';
import { InvoiceType } from 'src/database/enums/InvoiceType';

export class InvoiceResponseDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  invoiceNumber: number;

  @ApiProperty()
  invoiceCount: number;

  @ApiProperty({ enum: Currency })
  currency: Currency;

  @ApiProperty({ enum: InvoiceType })
  invoiceType: InvoiceType;
}
