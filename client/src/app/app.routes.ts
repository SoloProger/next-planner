import { Routes } from '@angular/router';
import { authGuard } from '../shared/lib/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../pages/main-page.component').then(m => m.MainPageComponent),
    canActivate: [authGuard],
    children: [
      {
        path: 'invoice',
        loadComponent: () =>
          import('../pages/invoice-page.component').then(
            m => m.InvoicePageComponent
          ),
      },
      {
        path: 'history',
        loadComponent: () =>
          import('../pages/history-page.component').then(
            m => m.HistoryPageComponent
          ),
      },
      {
        path: 'detail-record/:id',
        loadComponent: () =>
          import('../pages/record-detail-page.component').then(
            m => m.RecordDetailPageComponent
          ),
      },
      {
        path: 'planning',
        loadComponent: () =>
          import('../pages/planning-page.component').then(
            m => m.PlanningPageComponent
          ),
      },
      {
        path: 'categories',
        loadComponent: () =>
          import('../pages/category-page.component').then(
            m => m.CategoryPageComponent
          ),
      },
      { path: '', redirectTo: '/invoice', pathMatch: 'full' },
    ],
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('../pages/auth-page.component').then(m => m.AuthComponent),
  },
];
