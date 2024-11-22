import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-goal-card',
  templateUrl: 'goal-card.component.html',
})
export class GoalCardComponent {
  @Input({ required: true }) name!: string;

  @Input({ required: true }) description!: string;

  @Input({ required: true }) currentAmount!: number;

  @Input({ required: true }) totalAmount!: number;
}
