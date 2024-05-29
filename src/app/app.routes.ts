import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/main/main.routes').then((m) => m.MAIN_ROUTES),
  },
];
