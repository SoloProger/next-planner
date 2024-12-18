import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { InvoiceModule } from './invoice/invoice.module';

@Module({
  imports: [InvoiceModule, CategoryModule],
})
export class AppModule {}
