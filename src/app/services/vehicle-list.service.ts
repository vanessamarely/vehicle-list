import { Injectable } from '@angular/core';

import * as _ from 'lodash';

import { Vehicle } from '../model/vehicle';
import { VEHICLES } from '../mock/vehicles';

@Injectable()
export class VehicleListService {
  
  constructor() { }

  getVehicleList(): Vehicle[] {
    let vehiclesList = [];
    vehiclesList = _.sortBy(VEHICLES, 'model');
    return vehiclesList;
  } 

  getVehicleDetail( vehicleId ): {} {
    let vehicleSelected = {};
    vehicleSelected = VEHICLES.filter( (vehicle => vehicle.id === vehicleId));
    return vehicleSelected;
  }

}
