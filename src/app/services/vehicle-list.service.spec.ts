import { TestBed, inject } from '@angular/core/testing';

import { VehicleListService } from './vehicle-list.service';

describe('VehicleListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleListService]
    });
  });

  it('should be created', inject([VehicleListService], (service: VehicleListService) => {
    expect(service).toBeTruthy();
  }));
});
