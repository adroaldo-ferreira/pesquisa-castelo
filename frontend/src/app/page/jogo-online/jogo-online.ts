import { Component, OnInit } from '@angular/core';
import { GraficoSetor } from "../../components/grafico-setor/grafico-setor";
import { EstatisticaDescritiva } from '../../pesquisa-types';
import { RegistroService } from '../../services/registro-service';

@Component({
  selector: 'app-jogo-online',
  imports: [GraficoSetor],
  templateUrl: './jogo-online.html',
  styleUrl: './jogo-online.css',
})
export class JogoOnline implements OnInit {
  constructor(private readonly service: RegistroService) { }

  lista: EstatisticaDescritiva[] = [];
  quantidade: number = 0;
  ngOnInit() {
    this.loadData();

    // comenta o service por 1 minuto
    /*this.lista = [
      { resposta: "Free Fire", quantidade: 4 },
      { resposta: "LOL", quantidade: 10 },
      { resposta: "Fortnite", quantidade: 6 },
    ];*/

  }

  loadData() {
    this.service.findGames().subscribe((data: any) => {
      console.log('API crua:', data[0]); // expande 1 pra ver

      // garante que é array e que quantidade é número
      const array = Array.isArray(data) ? data : data.data || [];
      this.lista = array.slice(0, 10).map((x: any) => ({
        resposta: x.resposta,
        quantidade: Number(x.quantidade)
      }));

      this.quantidade = this.lista.reduce((acc, item) => acc + item.quantidade, 0);
      console.log(`Total de respostas: ${this.quantidade}`);
    });
  }
}
