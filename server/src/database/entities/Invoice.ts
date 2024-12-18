import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Currency } from '../enums/Currency';
import { InvoiceType } from '../enums/InvoiceType';

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  invoiceNumber: number;

  @Column()
  invoiceCount: number;

  @Column({
    type: 'enum',
    enum: Currency,
    default: Currency.RUBLE,
  })
  currency: Currency;

  @Column({
    type: 'enum',
    enum: InvoiceType,
    default: InvoiceType.MAIN,
  })
  invoiceType: InvoiceType;
}
