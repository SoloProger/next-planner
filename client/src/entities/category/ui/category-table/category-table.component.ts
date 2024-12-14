import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { tableColumns } from '../../constants/tableColumns';
import { EntityDataModel } from '../../../../shared/model/types/EntityDataModel';
import { BaseStrapiApiService } from '../../../../shared/api/services/base-strapi-api.service';
import { Category } from '../../model/types/Category';
import { DialogService } from '../../../../shared/ui/dialog/services/dialog.service';
import { CategoryFormComponent } from '../category-form/category-form.component';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-category-table',
  template: `
    <app-table
      withActions
      [columns]="tableColumns"
      [strapiData]="categories()"
      (addNewEntity)="addNewCategory()"
      (editClick)="editCategory($event)">
    </app-table>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryTableComponent implements OnInit {
  protected readonly tableColumns = tableColumns;
  private api: BaseStrapiApiService<Category, { data: Category }> =
    inject(BaseStrapiApiService);
  private dialog = inject(DialogService);

  public categories = signal<EntityDataModel<Category>[]>([]);

  ngOnInit() {
    this.api
      .getAll('categories')
      .subscribe(categories =>
        this.categories.set(
          categories.data as unknown as EntityDataModel<Category>[]
        )
      );
  }

  public addNewCategory(): void {
    this.dialog
      .openDialog(CategoryFormComponent, {
        title: 'Добавить категорию',
      })
      .afterClosed.pipe(
        switchMap((formData: Category) =>
          this.api.post('categories', { data: formData })
        )
      )
      .subscribe(category => {
        const _category = category as unknown as {
          data: EntityDataModel<Category>;
        };
        this.categories.update(categories => [...categories, _category.data]);
      });
  }

  public editCategory(category: EntityDataModel<Category> | null): void {
    this.dialog
      .openDialog(CategoryFormComponent, {
        title: 'Изменить категорию',
        data: { ...category?.attributes, id: category?.id },
        isEditing: true,
      })
      .afterClosed.pipe(
        switchMap(formData =>
          this.api.put('categories', formData.id, { data: formData.formData })
        )
      )
      .subscribe(category => {
        const _category = category as unknown as {
          data: EntityDataModel<Category>;
        };
        this.categories.update(categories => [...categories, _category.data]);
      });
  }
}
