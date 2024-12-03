import { Injectable } from '@angular/core';
import { Goal } from '../types/Goal';
import { EntityDataModel } from '../../../../shared/model/types/EntityDataModel';
import { AbstractStateService } from '../../../../shared/model/abstract/abstract-state.service';

interface GoalState {
  goals: EntityDataModel<Goal>[] | [];
  goal: EntityDataModel<Goal> | null;
}

@Injectable()
export class GoalStateService extends AbstractStateService<GoalState> {
  public getGoals = this.select(state => state?.goals);

  constructor() {
    super({
      goals: [],
      goal: null,
    });
  }

  public setGoals(goals: EntityDataModel<Goal>[]) {
    this.setState({ goals });
  }

  public setGoal(goal: { data: EntityDataModel<Goal> }) {
    this.setState({ goals: [...(this.getGoals() as []), goal.data] });
  }
}
