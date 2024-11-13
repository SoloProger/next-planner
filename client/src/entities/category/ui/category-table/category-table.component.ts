import {Component, OnInit} from '@angular/core';
import {tableColumns} from "../../constants/tableColumns";
import {BehaviorSubject} from "rxjs";
import {EntityDataModel} from "../../../../shared/model/types/EntityDataModel";
import {BaseStrapiApiService} from "../../../../shared/api/services/base-strapi-api.service";
import {Category} from "../../model/types/Category";

@Component({
  selector: 'app-category-table',
  template: `

    <section>
      <table>
        <thead>
        <tr>
          @for (column of tableColumns; track column) {
            <th>{{ column }}</th>
          }
        </tr>
        </thead>
        <tbody>
          @for (record of categories$ | async; track record.id) {
            <tr>
              <td>{{ record.id }}</td>
              <td>{{ record.attributes.name }}</td>
              <td>{{ record.attributes.description }}</td>
            </tr>
          }
        </tbody>
      </table>
    </section>


  `
})

export class CategoryTableComponent implements OnInit {
  protected readonly tableColumns = tableColumns;


  public categories$: BehaviorSubject<EntityDataModel<Category>[]> = new BehaviorSubject<EntityDataModel<Category>[]>(
    []
  );

  constructor(
    private apiService: BaseStrapiApiService<Category, Category>) {
  }

  ngOnInit() {
    this.apiService.getAll("categories").subscribe((categories) => this.categories$.next(categories.data))
  }


}
