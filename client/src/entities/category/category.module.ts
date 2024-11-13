import {NgModule} from '@angular/core';
import {CategoryTableComponent} from "./ui/category-table/category-table.component";
import {CommonModule} from "@angular/common";


@NgModule({
  imports: [CommonModule],
  exports: [CategoryTableComponent],
  declarations: [CategoryTableComponent],
  providers: [],
})
export class CategoryModule {
}
