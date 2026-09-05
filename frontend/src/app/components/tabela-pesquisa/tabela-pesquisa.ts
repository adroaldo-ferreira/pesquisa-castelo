import { Component, OnInit } from '@angular/core';
import { PesquisaPage } from '../../pesquisa-types';
import { RegistroService } from '../../services/registro-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabela-pesquisa',
  imports: [FormsModule],
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
      console.log('Respostas carregadas:', this.pesquisaPage.content);
    });
  }

  ngOnInit() {
    this.buscarRespostas();
  }

  excluirRegistro(id: number) {
    if (confirm('Tem certeza que deseja excluir este registro?')) {
      this.service.delete(id).subscribe(() => {
        console.log(`Registro com ID ${id} excluído com sucesso.`);
        this.buscarRespostas(); // Atualiza a lista após a exclusão
      }, (error) => {
        console.error(`Erro ao excluir o registro com ID ${id}:`, error);
      });
    }
  }

}
