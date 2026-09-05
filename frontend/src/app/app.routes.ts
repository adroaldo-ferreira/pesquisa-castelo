import { Routes } from '@angular/router';
import { Cadastro } from './page/cadastro/cadastro';
import { TabelaPesquisa } from './components/tabela-pesquisa/tabela-pesquisa';
import { JogoOnline } from './page/jogo-online/jogo-online';

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
  },
  {
    path: 'game',
    component: JogoOnline
  }
];

export const BASE_URL = 'http://localhost:8080/api';
