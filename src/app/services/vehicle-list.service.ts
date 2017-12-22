import { Injectable } from '@angular/core';

import * as _ from 'lodash';

import { Vehicle } from '../model/vehicle';
import { VEHICLES } from '../mock/vehicles';

@Injectable()
export class VehicleListService {
  
  comparedData = [];
  
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

  setComparedVehicles(data) {
    this.comparedData = data;
  }
  
  getComparedVehicles(){
    return this.comparedData;
  }

}
