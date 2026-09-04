import { Component, OnInit } from '@angular/core';
import { PesquisaPage } from '../../pesquisa-types';
import { RegistroService } from '../../services/registro-service';

@Component({
  selector: 'app-tabela-pesquisa',
  imports: [],
  templateUrl: './tabela-pesquisa.html',
  styleUrl: './tabela-pesquisa.css',
})
export class TabelaPesquisa implements OnInit {
  constructor(private readonly service: RegistroService) { }

  pesquisaPage: PesquisaPage = {
    content: [],
    page: {
      totalElements: 0,
      totalPages: 0,
      size: 0,
      number: 0
    }
  };


  buscarRespostas(page = 0, size = 20) {
    this.service.findAll(page, size).subscribe((data) => {
      this.pesquisaPage = data;
      console.log('Respostas carregadas:', data);
    });
  }

  ngOnInit() {
    this.buscarRespostas();
  }

}
