import {Routes} from '@angular/router';


export const routes: Routes = [
  {
    path: '', loadComponent: () => import("../pages/main-page.component").then(m => m.MainPageComponent),
    children: [
      {
        path: 'invoice',
        loadComponent: () => import("../pages/invoice-page.component").then(m => m.InvoicePageComponent),
      },
      {path: '', redirectTo: '/invoice', pathMatch: 'full'},
    ],
  },
  {
    path: 'auth', loadComponent: () => import("../pages/auth-page.component").then(m => m.AuthComponent)
  },

];
