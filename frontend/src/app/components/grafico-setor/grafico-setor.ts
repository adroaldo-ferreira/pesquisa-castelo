import { Component, Input, OnChanges } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { EstatisticaDescritiva } from '../../pesquisa-types';

Chart.register(...registerables); // <-- ESSENCIAL pro gráfico aparecer

@Component({
  selector: 'app-grafico-setor',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './grafico-setor.html',
})
export class GraficoSetor implements OnChanges {
  @Input() list: EstatisticaDescritiva[] = [];
  public pieChartType = 'pie' as const;

  public pieChartData: ChartConfiguration<'pie'>['data'] = { labels: [], datasets: [{ data: [] }] };
  public pieChartOptions: ChartConfiguration<'pie'>['options'] = {
    responsive: true,
    plugins: { legend: { position: 'bottom' } }
  };

  ngOnChanges(): void {
    if (this.list?.length) {
      this.pieChartData = {
        labels: this.list.map(i => i.resposta),
        datasets: [{ data: this.list.map(i => i.quantidade) }]
      };
    }
  }
}
