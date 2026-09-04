import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RequestPesquisaDto } from '../../pesquisa-types';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  cadastro: RequestPesquisaDto = {
    jogoOnlineFavorito: '',
    esporteFavorito: '',
    viagemDosSonhos: '',
    memeFavorito: '',
    calcadoFavorito: '',
    cantorFavorito: '',
    jogadorFavorito: '',
    filmeFavorito: '',
    materiaPreferida: '',
    lugarFavorito: '',
    marcaPreferida: '',
    horasSono: 0
  };

  salvarPesquisa() {
    console.log('Pesquisa salva:', this.cadastro);
  }
}
