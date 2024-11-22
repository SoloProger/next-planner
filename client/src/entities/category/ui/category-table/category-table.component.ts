import { Component, OnInit } from '@angular/core';
import { tableColumns } from '../../constants/tableColumns';
import { BehaviorSubject } from 'rxjs';
import { EntityDataModel } from '../../../../shared/model/types/EntityDataModel';
import { BaseStrapiApiService } from '../../../../shared/api/services/base-strapi-api.service';
import { Category } from '../../model/types/Category';

@Component({
  selector: 'app-category-table',
  template: `
    <app-table
      [columns]="tableColumns"
      [strapiData]="categories$ | async"
    ></app-table>
  `,
})
export class CategoryTableComponent implements OnInit {
  protected readonly tableColumns = tableColumns;

  public categories$: BehaviorSubject<EntityDataModel<Category>[]> =
    new BehaviorSubject<EntityDataModel<Category>[]>([]);

  constructor(private apiService: BaseStrapiApiService<Category, Category>) {}

  ngOnInit() {
    this.apiService
      .getAll('categories')
      .subscribe((categories) => this.categories$.next(categories.data));
  }
}
