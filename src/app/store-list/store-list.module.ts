import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreListRoutingModule } from './store-list-routing.module';
import { StoreListComponent } from './store-list.component';
import { AutomotiveStoreListComponent } from './automotive-store-list/automotive-store-list.component';
import { CommercialStoreListComponent } from './commercial-store-list/commercial-store-list.component';
import { ResidentialStoreListComponent } from './residential-store-list/residential-store-list.component';
import { HeaderComponent } from './component/header/header.component';



@NgModule({
  declarations: [
    StoreListComponent,
    AutomotiveStoreListComponent,
    CommercialStoreListComponent,
    ResidentialStoreListComponent,
    HeaderComponent,

  ],
  imports: [
    CommonModule,
    StoreListRoutingModule
  ]
})
export class StoreListModule { }
