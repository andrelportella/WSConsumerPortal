import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloListaComponent } from './titulo-lista.component';

describe('TituloListaComponent', () => {
  let component: TituloListaComponent;
  let fixture: ComponentFixture<TituloListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
