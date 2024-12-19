import { inject, Injectable } from '@angular/core';
import { Goal } from '../types/Goal';
import { BaseApiService } from '../../../../shared/api/services/base-api.service';
import { BaseStateService } from '../../../../shared/model/services/base-state.service';
import { ApiService } from '../../../../shared/model/types/ApiService';

@Injectable()
export class GoalHandlerService {
  private api: ApiService<Goal, Goal> = inject(BaseApiService);
  public state: BaseStateService<Goal> = inject(BaseStateService);

  public ENDPOINT = 'goal';

  public getGoals(): void {
    this.api.getAll(this.ENDPOINT).subscribe(goals => {
      this.state.setEntities(goals);
    });
  }

  public addGoal(formData: Goal): void {
    this.api.post(this.ENDPOINT, formData).subscribe(goal => {
      this.state.setEntity(goal);
    });
  }

  public updateGoal(id: number, formData: Goal): void {
    this.api.put(this.ENDPOINT, id, formData).subscribe(goal => {
      this.state.setEntity(goal);
    });
  }
}
