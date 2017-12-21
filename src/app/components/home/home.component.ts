import { Component, OnInit } from '@angular/core';
import { VehicleListService } from '../../services/vehicle-list.service';
import { FormBuilder, FormGroup, FormControl  } from '@angular/forms';


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
    this.brandVehicleList = vehicles.map( item => item.brand);
   
    if(this.selectedBrand === '') {
      this.vehiclesList = vehicles;
    }else {
      let filteredVehicles = [];
      vehicles.filter(item => item.brand === this.selectedBrand).map(item => filteredVehicles.push(item))
      this.vehiclesList = filteredVehicles;
    }
  }

  onChange(): void {
    this.selectedBrand = this.form.get('brandName').value;
    this.getVehicles();
  }

}
