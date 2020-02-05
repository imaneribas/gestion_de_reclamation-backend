import { TestBed } from '@angular/core/testing';

import { DisponibilitiesService } from './disponibilities.service';

describe('DisponibilitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisponibilitiesService = TestBed.get(DisponibilitiesService);
    expect(service).toBeTruthy();
  });
});
