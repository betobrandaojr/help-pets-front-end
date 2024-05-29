import { Routes } from '@angular/router';

export const REGISTER_ROUTES: Routes = [
  {
    path: 'usuario',
    loadChildren: () =>
      import('./user/register-user.routes').then((m) => m.USER_ROUTES),
  },
  {
    path: 'animais',
    loadChildren: () =>
      import('./pets/register-pets.routes').then((m) => m.PETS_ROUTES),
  },
  {
    path: 'abrigo',
    loadChildren: () =>
      import('./shelter/register-shelter.routes').then((m) => m.SHELTER_ROUTES),
  },
  {
    path: 'baias',
    loadChildren: () =>
      import('./bay/register-bay.routes').then((m) => m.BAY_ROUTES),
  },
  {
    path: 'pessoas',
    loadChildren: () =>
      import('./person/register-person.routes').then((m) => m.PERSON_ROUTES),
  },
];
