import { Menu } from './main.interface';

export const MENU_LIST: Menu[] = [
  { label: 'Boas vindas!', icon: 'home', route: 'boas-vindas' },
  {
    label: 'Cadastro',
    icon: 'form',
    children: [
      { label: 'Usuário', route: 'cadastro/usuario' },
      { label: 'Abrigo', route: 'cadastro/abrigo' },
      { label: 'Baias', route: 'cadastro/baias' },
      { label: 'Animais', route: 'cadastro/animais' },
      { label: 'Pessoas', route: 'cadastro/pessoas' },
    ],
  },
];
