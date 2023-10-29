import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearegresoComponent } from './crearegreso.component';

describe('CrearegresoComponent', () => {
  let component: CrearegresoComponent;
  let fixture: ComponentFixture<CrearegresoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearegresoComponent]
    });
    fixture = TestBed.createComponent(CrearegresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
