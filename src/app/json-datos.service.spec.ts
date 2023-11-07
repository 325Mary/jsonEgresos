import { TestBed } from '@angular/core/testing';

import { JsonDatosService } from './json-datos.service';

describe('JsonDatosService', () => {
  let service: JsonDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
