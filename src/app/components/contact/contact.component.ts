import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/Api-Service/apiservice.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  constructor(private api:ApiserviceService){

  }
  state: any;
  city:any;
  contact:any;
ngOnInit(): void {
this.state = this.api.state();
this.contact = this.api.contact;
}
onSelect(state:any){
this.city=this.api.city().filter((e)=>e.state=state.target.value)
}
}
