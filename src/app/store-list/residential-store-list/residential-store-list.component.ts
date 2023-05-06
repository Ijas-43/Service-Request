import { Component,OnInit,Input } from '@angular/core';
import { ApiserviceService } from 'src/app/Api-Service/apiservice.service';
@Component({
  selector: 'app-residential-store-list',
  templateUrl: './residential-store-list.component.html',
  styleUrls: ['./residential-store-list.component.scss']
})
export class ResidentialStoreListComponent implements OnInit {
  showMe:boolean=false;
  @Input()
  isActive: boolean | undefined;

  onClick(){
    this.isActive;
  }
  constructor(private api:ApiserviceService){}

  details: any = [];
  residential:any = [];
  Plumber_service:any =[];
  service_type:any=[];
  startPage : number = 0;
  paginationLimit: number =0;
ngOnInit() {

this.details = this.api.details;
this.residential = this.api.residential;
// this.service_type = this.api.service_type;
this.startPage = 0;
this.paginationLimit = 3;
}

toggleTag(){
  this.showMe=!this.showMe
}

increase(item :any) {
  if(item.quantity !=10000000000000000) {
    item.quantity += 1;
  }}

  views(item :any) {
    if(item.views !=10000000000000000) {
      item.views += 1;
    }}

residence(residential: any){
  this.Plumber_service = this.api.Plumber_service.filter((a)=> a.type == residential.target.value);
  this.service_type = this.api.service_type.filter((e)=> e.type == residential.target.value)
}

// onBrand(brands: any) {
//   this.model = this.api
//     .model()
//     .filter((e) => e.brand == brands.target.value);
//     this.vehicle = this.vehicle.target.value;
// }
showMoreItems()
{
   this.paginationLimit = Number(this.paginationLimit) + 10;
}
showLessItems()
{
  this.paginationLimit = Number(this.paginationLimit) ;
}
}
