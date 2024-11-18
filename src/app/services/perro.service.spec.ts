import { TestBed } from '@angular/core/testing';

import { PerroService } from '../service/perro.service';

describe('PerroService', () => {
  let service: PerroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
