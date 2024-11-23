import { Component, input } from '@angular/core';

@Component({
  selector: 'app-goal-card',
  templateUrl: 'goal-card.component.html',
})
export class GoalCardComponent {
  public name = input.required<string>();
  public description = input.required<string>();
  public currentAmount = input.required<number>();
  public totalAmount = input.required<number>();
}
