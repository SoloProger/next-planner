import { NgModule } from '@angular/core';
import { CategoryTableComponent } from './ui/category-table/category-table.component';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../shared/ui/table/table.component';
import { DialogService } from '../../shared/ui/dialog/services/dialog.service';
import { CategoryFormComponent } from './ui/category-form/category-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../shared/ui/input/input.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';

@NgModule({
  imports: [
    CommonModule,
    TableComponent,
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
  ],
  exports: [CategoryTableComponent],
  declarations: [CategoryTableComponent, CategoryFormComponent],
  providers: [DialogService],
})
export class CategoryModule {}
