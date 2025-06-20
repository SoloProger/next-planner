import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { GoalModule } from './goal/goal.module';
import { InvoiceModule } from './invoice/invoice.module';
import { RecordModule } from './record/record.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule,
    InvoiceModule,
    RecordModule,
    GoalModule,
    CategoryModule,
  ],
})
export class AppModule {}
