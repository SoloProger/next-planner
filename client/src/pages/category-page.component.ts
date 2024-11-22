import { Component, OnInit } from '@angular/core';
import { PageLayoutComponent } from '../widgets/layouts/page-layout/ui/page-layout.component';
import { CategoryModule } from '../entities/category/category.module';

@Component({
  selector: 'app-category-page',
  template: ` <app-page-layout title="Категории">
    <app-category-table></app-category-table>
  </app-page-layout>`,
  standalone: true,
  imports: [PageLayoutComponent, CategoryModule],
})
export class CategoryPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
