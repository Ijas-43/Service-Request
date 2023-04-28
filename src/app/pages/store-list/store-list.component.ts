import { Component, Input, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/Api-Service/apiservice.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss']
})
export class StoreListComponent implements OnInit {
  @Input()
  isActive: boolean | undefined;
  onClick(){
    this.isActive = !this.isActive;
  }
  constructor(private api: ApiserviceService) {}
  vehicle: any = [];
  brands: any =[];
  model: any =[];
  details: any = [];
ngOnInit() {
  this.vehicle = this.api.vehicle();
this.details = this.api.details;
}
onVehicle(vehicle: any) {
  // if(vehicle.target.checked){
  this.brands = this.api
    .brands()
    .filter((e) => e.vehicle == vehicle.target.value);
  // }
  // else{
  //   this.brands = this.api
  //   .brands()
  //   .filter((e) => e.vehicle != vehicle.target.value);
  // }
}
onBrand(brands: any) {
  this.model = this.api
    .model()
    .filter((e) => e.brand == brands.target.value);
    this.vehicle = this.vehicle.target.value;
}
}
