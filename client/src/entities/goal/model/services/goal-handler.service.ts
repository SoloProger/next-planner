import { inject, Injectable } from '@angular/core';
import { Goal } from '../types/Goal';
import { EntitiesDataModel } from '../../../../shared/model/types/EntitiesDataModel';
import { BaseApiService } from '../../../../shared/api/services/base-api.service';
import { BaseStateService } from '../../../../shared/model/services/base-state.service';
import { EntityDataModel } from '../../../../shared/model/types/EntityDataModel';

@Injectable()
export class GoalHandlerService {
  private api = inject(BaseApiService);
  public state: BaseStateService<EntityDataModel<Goal>> =
    inject(BaseStateService);

  public ENDPOINT = 'goals';

  public getGoals(): void {
    this.api.getAll(this.ENDPOINT).subscribe(goals => {
      const _goals = goals as unknown as EntitiesDataModel<Goal>;
      this.state.setEntities(_goals.data);
    });
  }

  public addGoal<T>(formData: T): void {
    this.api.post(this.ENDPOINT, formData).subscribe(goal => {
      const _goal = goal as unknown as { data: EntityDataModel<Goal> };
      this.state.setEntity(_goal.data);
    });
  }

  public updateGoal<T>(id: number, formData: T): void {
    this.api.put(this.ENDPOINT, id, formData).subscribe(goal => {
      const _goal = goal as unknown as { data: EntityDataModel<Goal> };
      this.state.setEntity(_goal.data);
    });
  }
}
