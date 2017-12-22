import { Component, OnInit } from '@angular/core';
import { VehicleListService } from '../../services/vehicle-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  vehicleId: string = '';
  vehicleDetail: Object = {};

  constructor(private vehicleList: VehicleListService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.vehicleId = params['id'];
    });
    this.vehicleDetail = this.vehicleList.getVehicleDetail(this.vehicleId)[0];
  }



}
