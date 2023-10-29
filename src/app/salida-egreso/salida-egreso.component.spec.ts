import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaEgresoComponent } from './salida-egreso.component';

describe('SalidaEgresoComponent', () => {
  let component: SalidaEgresoComponent;
  let fixture: ComponentFixture<SalidaEgresoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalidaEgresoComponent]
    });
    fixture = TestBed.createComponent(SalidaEgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
