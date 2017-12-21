import { Component, OnInit } from '@angular/core';
import { VehicleListService } from '../../services/vehicle-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  vehicles = [];
  
  constructor(private vehicleList: VehicleListService) { }

  ngOnInit() {
    this.getStoreItems();
  }

  getStoreItems(): void {
    this.vehicles = this.vehicleList.getVehicleList();
    console.log( this.vehicles)
  }

}
