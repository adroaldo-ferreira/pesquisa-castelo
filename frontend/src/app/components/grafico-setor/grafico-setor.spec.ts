import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoSetor } from './grafico-setor';

describe('GraficoSetor', () => {
  let component: GraficoSetor;
  let fixture: ComponentFixture<GraficoSetor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficoSetor],
    }).compileComponents();

    fixture = TestBed.createComponent(GraficoSetor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
