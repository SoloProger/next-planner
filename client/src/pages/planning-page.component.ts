import {Component, OnInit} from '@angular/core';
import {PageLayoutComponent} from "../widgets/layouts/page-layout/ui/page-layout.component";
import {GoalModule} from "../entities/goal/goal.module";

@Component({
  selector: 'app-planning-page',
  template: `
    <app-page-layout title="Планирование">
      <app-goal-grid></app-goal-grid>
    </app-page-layout>
  `,
  standalone: true,
  imports: [
    PageLayoutComponent,
    GoalModule
  ]
})

export class PlanningPageComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
