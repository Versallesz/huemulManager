import { TestBed } from '@angular/core/testing';

import { ApartmentBuildingService } from './apartment-building-service';

describe('ApartmentBuildingService', () => {
  let service: ApartmentBuildingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApartmentBuildingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
