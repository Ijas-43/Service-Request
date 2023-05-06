import { Component,OnInit,Input } from '@angular/core';
import { ApiserviceService } from 'src/app/Api-Service/apiservice.service';
@Component({
  selector: 'app-automotive-store-list',
  templateUrl: './automotive-store-list.component.html',
  styleUrls: ['./automotive-store-list.component.scss']
})
export class AutomotiveStoreListComponent implements OnInit{
  showMe:boolean=false;
  @Input()
  isActive: boolean | undefined;

  onClick(){
    this.isActive;
  }
  constructor(private api:ApiserviceService){}
  vehicle: any = [];
  brands: any =[];
  model: any =[];
  details: any = [];
  complaints: any =[];
  startPage : number = 0;
  paginationLimit: number =0;
ngOnInit() {
  this.vehicle = this.api.vehicle();
this.details = this.api.details;
this.complaints = this.api.complaints();
this.startPage = 0;
this.paginationLimit = 3;
}

toggleTag(){
  this.showMe=!this.showMe;
}

increase(item :any) {
  if(item.quantity !=10000000000000000) {
    item.quantity += 1;
  }}

  views(item :any) {
    if(item.views !=10000000000000000) {
      item.views += 1;
    }}
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
showMoreItems()
{
   this.paginationLimit = Number(this.paginationLimit) + 10;
}
showLessItems()
{
  this.paginationLimit = Number(this.paginationLimit) ;
}

}
