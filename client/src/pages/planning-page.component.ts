import { Component } from '@angular/core';
import { PageLayoutComponent } from '../widgets/layouts/page-layout/ui/page-layout.component';
import { GoalModule } from '../entities/goal/goal.module';
import { AddGoalComponent } from '../features/add-goal/ui/add-goal.component';

@Component({
  selector: 'app-planning-page',
  template: `
    <app-page-layout title="Планирование">
      <app-goal-grid>
        <app-add-goal></app-add-goal>
      </app-goal-grid>
    </app-page-layout>
  `,
  standalone: true,
  imports: [PageLayoutComponent, GoalModule, AddGoalComponent],
})
export class PlanningPageComponent {}
