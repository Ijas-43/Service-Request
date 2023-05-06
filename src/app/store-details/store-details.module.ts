import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreDetailsRoutingModule } from './store-details-routing.module';
import { StoreDetailsComponent } from './store-details.component';
import { ResidentialStoreDetailsComponent } from './residential-store-details/residential-store-details.component';
import { CommercialStoreDetailsComponent } from './commercial-store-details/commercial-store-details.component';
import { AutomotiveStoreDetailsComponent } from './automotive-store-details/automotive-store-details.component';
import { HeaderComponent } from './component/header/header.component';


@NgModule({
  declarations: [
    StoreDetailsComponent,
    ResidentialStoreDetailsComponent,
    CommercialStoreDetailsComponent,
    AutomotiveStoreDetailsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    StoreDetailsRoutingModule
  ]
})
export class StoreDetailsModule { }
