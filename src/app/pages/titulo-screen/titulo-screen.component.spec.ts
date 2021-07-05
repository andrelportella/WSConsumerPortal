import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloScreenComponent } from './titulo-screen.component';

describe('TituloScreenComponent', () => {
  let component: TituloScreenComponent;
  let fixture: ComponentFixture<TituloScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
