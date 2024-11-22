import { NgModule } from '@angular/core';
import { CategoryTableComponent } from './ui/category-table/category-table.component';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../shared/ui/table/table.component';

@NgModule({
  imports: [CommonModule, TableComponent],
  exports: [CategoryTableComponent],
  declarations: [CategoryTableComponent],
  providers: [],
})
export class CategoryModule {}
