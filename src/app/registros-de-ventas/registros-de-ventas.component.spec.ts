import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosDeVentasComponent } from './registros-de-ventas.component';

describe('RegistrosDeVentasComponent', () => {
  let component: RegistrosDeVentasComponent;
  let fixture: ComponentFixture<RegistrosDeVentasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrosDeVentasComponent]
    });
    fixture = TestBed.createComponent(RegistrosDeVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
