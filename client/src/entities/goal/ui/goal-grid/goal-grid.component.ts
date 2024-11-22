import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EntityDataModel } from '../../../../shared/model/types/EntityDataModel';
import { BaseStrapiApiService } from '../../../../shared/api/services/base-strapi-api.service';
import { Goal } from '../../model/types/Goal';

@Component({
  selector: 'app-goal-grid',
  template: `
    <section class="flex ai-center wi-100 gap-24">
      @for (goal of goals$ | async; track goal.id) {
        <app-goal-card
          [name]="goal.attributes.name"
          [description]="goal.attributes.description"
          [totalAmount]="goal.attributes.totalAmount"
          [currentAmount]="goal.attributes.currentAmount"
        ></app-goal-card>
      }
    </section>
  `,
})
export class GoalGridComponent implements OnInit {
  public goals$: BehaviorSubject<EntityDataModel<Goal>[]> = new BehaviorSubject<
    EntityDataModel<Goal>[]
  >([]);

  constructor(private apiService: BaseStrapiApiService<Goal, Goal>) {}

  ngOnInit() {
    this.apiService.getAll('goals').subscribe((goals) => {
      this.goals$.next(goals.data);
    });
  }
}
