import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/Api-Service/apiservice.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private api:ApiserviceService){}
  city: any = [];
  details: any = [];
  ngOnInit(){
this.city= this.api.city();
}
citi(city: any){
  this.details = this.api.details.filter((c)=>  c.city == city.target.value);
    }
}
