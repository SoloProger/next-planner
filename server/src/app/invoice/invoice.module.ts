import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invoice } from 'src/database/entities/Invoice';
import { InvoiceController } from './invoice.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Invoice])],
  controllers: [InvoiceController],
})
export class InvoiceModule {}
