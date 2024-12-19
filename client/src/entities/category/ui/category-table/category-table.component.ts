import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { tableColumns } from '../../constants/tableColumns';
import { EntityDataModel } from '../../../../shared/model/types/EntityDataModel';
import { Category } from '../../model/types/Category';
import { DialogService } from '../../../../shared/ui/dialog/services/dialog.service';
import { CategoryFormComponent } from '../category-form/category-form.component';
import { switchMap } from 'rxjs';
import { ApiService } from '../../../../shared/model/types/ApiService';
import { BaseApiService } from '../../../../shared/api/services/base-api.service';

@Component({
  selector: 'app-category-table',
  template: `
    <app-table
      withActions
      [columns]="tableColumns"
      [data]="categories()"
      (addNewEntity)="addNewCategory()"
      (editClick)="editCategory($event)">
    </app-table>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryTableComponent implements OnInit {
  protected readonly tableColumns = tableColumns;
  private api: ApiService<Category, Category> = inject(BaseApiService);
  private dialog = inject(DialogService);

  public categories = signal<Category[]>([]);

  ngOnInit() {
    this.api
      .getAll('category')
      .subscribe(categories => this.categories.set(categories));
  }

  public addNewCategory(): void {
    this.dialog
      .openDialog(CategoryFormComponent, {
        title: 'Добавить категорию',
      })
      .afterClosed.pipe(
        switchMap((formData: Category) => this.api.post('category', formData))
      )
      .subscribe(category => {
        this.categories.update(categories => [...categories, category]);
      });
  }

  public editCategory(category: EntityDataModel<Category> | null): void {
    this.dialog
      .openDialog(CategoryFormComponent, {
        title: 'Изменить категорию',
        data: { ...category, id: category?.id },
        isEditing: true,
      })
      .afterClosed.pipe(
        switchMap(formData =>
          this.api.put('category', formData.id, formData.formData)
        )
      )
      .subscribe(category => {
        this.categories.update(categories => [...categories, category]);
      });
  }
}
