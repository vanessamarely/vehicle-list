import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';


import { Vehicle } from '../model/vehicle';
import { VEHICLES } from '../mock/vehicles';

@Injectable()
export class VehicleListService {
  
  constructor(private http: Http) { }

  getVehicleList(): Vehicle[] {
    const vehiclesList = VEHICLES;
    return VEHICLES;
  } 

 

}
