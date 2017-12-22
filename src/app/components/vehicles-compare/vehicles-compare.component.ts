import { Component, OnInit } from '@angular/core';
import { VehicleListService } from '../../services/vehicle-list.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-vehicles-compare',
  templateUrl: './vehicles-compare.component.html',
  styleUrls: ['./vehicles-compare.component.scss']
})
export class VehiclesCompareComponent implements OnInit {

  vehicles = [];

  constructor(private vehicleList: VehicleListService) { }

  ngOnInit() {
    this.showComparedVehicles();
  }

  showComparedVehicles() {
    this.vehicles = _.sortBy(this.vehicleList.getComparedVehicles(), 'model') ;
  }

}
