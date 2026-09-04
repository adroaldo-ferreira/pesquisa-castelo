import { Routes } from '@angular/router';
import { Cadastro } from './page/cadastro/cadastro';
import { TabelaPesquisa } from './components/tabela-pesquisa/tabela-pesquisa';

export const routes: Routes = [
  {
    path: 'cadastro',
    component: Cadastro,
  },
  {
    path: '',
    redirectTo: 'cadastro',
    pathMatch: 'full'
  },
  {
    path: 'tabela-pesquisa',
    component: TabelaPesquisa
  }
];

export const BASE_URL = 'http://localhost:8080/api';
