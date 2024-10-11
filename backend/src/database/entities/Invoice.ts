import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CurrencyType } from '../enums/currency-type';
import { InvoiceType } from '../enums/invoice-type';


@Entity()
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  invoiceNumber: number;

  @Column({ type: 'enum', enum: CurrencyType, default: CurrencyType.RUBLE })
  currency: CurrencyType;

  @Column()
  invoiceCount: number;

  @Column({ type: 'enum', enum: InvoiceType, default: CurrencyType.RUBLE })
  invoiceType: InvoiceType;
}
