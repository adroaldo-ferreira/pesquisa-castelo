import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoOnline } from './jogo-online';

describe('JogoOnline', () => {
  let component: JogoOnline;
  let fixture: ComponentFixture<JogoOnline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JogoOnline],
    }).compileComponents();

    fixture = TestBed.createComponent(JogoOnline);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
