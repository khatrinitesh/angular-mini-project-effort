import { TestBed } from '@angular/core/testing';

import { ProperyService } from './propery.service';

describe('ProperyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProperyService = TestBed.get(ProperyService);
    expect(service).toBeTruthy();
  });
});
