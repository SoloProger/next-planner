import {Routes} from '@angular/router';


export const routes: Routes = [
  {
    path: '', loadComponent: () => import("../pages/main-page.component").then(m => m.MainPageComponent),
    children: [
      {
        path: 'invoice',
        loadComponent: () => import("../pages/invoice-page.component").then(m => m.InvoicePageComponent),
      },
      {
        path: 'history',
        loadComponent: () => import("../pages/history-page.component").then(m => m.HistoryPageComponent),
      },
      {
        path: 'detail-record/:id',
        loadComponent: () => import("../pages/record-detail-page.component").then(m => m.RecordDetailPageComponent),
      },
      {path: '', redirectTo: '/invoice', pathMatch: 'full'},
    ],
  },
  {
    path: 'auth', loadComponent: () => import("../pages/auth-page.component").then(m => m.AuthComponent)
  },

];
