import { Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const MAIN_ROUTES: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/boas-vindas' },
      {
        path: 'boas-vindas',
        loadChildren: () =>
          import('../welcome/welcome.routes').then((m) => m.WELCOME_ROUTES),
      },
      {
        path: 'cadastro',
        loadChildren: () =>
          import('../register/register.routes').then((m) => m.REGISTER_ROUTES),
      },
    ],
  },
];
