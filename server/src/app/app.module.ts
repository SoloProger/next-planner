import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { GoalModule } from './goal/goal.module';
import { InvoiceModule } from './invoice/invoice.module';

@Module({
  imports: [InvoiceModule, GoalModule, CategoryModule],
})
export class AppModule {}
