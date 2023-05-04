import { TestBed } from '@angular/core/testing';

import { HabilidadService } from './habilidades.service';

describe('HabilidadesService', () => {
  let service: HabilidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabilidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
