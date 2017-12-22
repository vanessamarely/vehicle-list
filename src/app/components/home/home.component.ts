import { Component, OnInit } from '@angular/core';
import { VehicleListService } from '../../services/vehicle-list.service';
import { FormBuilder, FormGroup, FormControl  } from '@angular/forms';

import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  vehiclesList = [];
  brandVehicleList = [];
  form: FormGroup;
  selectedBrand: string = '';
  search: boolean = true;

  constructor(private vehicleList: VehicleListService, fb: FormBuilder) { 
    this.form = fb.group({
      brandName: [['']]
    });
  }

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles(): void {
    const vehicles = this.vehicleList.getVehicleList();
    if(this.selectedBrand === '') {
      this.vehiclesList = vehicles;
    }else {
      let filteredVehicles = [];
      vehicles.filter(item => _.lowerCase(item.brand) === _.lowerCase(this.selectedBrand)).map(item => filteredVehicles.push(item))
      this.vehiclesList = filteredVehicles.length? filteredVehicles : [];
      console.log( this.vehiclesList)
    }
  }

  onChange(): void {
    this.selectedBrand = this.form.get('brandName').value;
    this.getVehicles();
  }

  filterByBrand():void {
    let brandVehicles = [];
    brandVehicles = this.vehicleList.getVehicleList().map( item => item.brand);
    brandVehicles.sort().map( (brand) => {
      if(this.brandVehicleList.indexOf(brand) < 0) {
        this.brandVehicleList.push(brand);
      }
    });
  }

}
