import { Component, effect, input, output } from '@angular/core';
import { Goal } from '../../model/types/Goal';

@Component({
  selector: 'app-goal-card',
  templateUrl: 'goal-card.component.html',
})
export class GoalCardComponent {
  public goal: Goal | null = null;

  public name = input.required<string>();
  public description = input.required<string>();
  public currentAmount = input.required<number>();
  public totalAmount = input.required<number>();

  public edit = output<Goal | null>();

  constructor() {
    effect(() => {
      this.goal = {
        name: this.name(),
        description: this.description(),
        currentAmount: this.currentAmount(),
        totalAmount: this.totalAmount(),
      };
    });
  }
}
