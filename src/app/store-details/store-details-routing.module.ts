import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreDetailsComponent } from './store-details.component';
import { AutomotiveStoreDetailsComponent } from './automotive-store-details/automotive-store-details.component';
import { CommercialStoreDetailsComponent } from './commercial-store-details/commercial-store-details.component';
import { ResidentialStoreDetailsComponent } from './residential-store-details/residential-store-details.component';

const routes: Routes = [{ path: '', component: StoreDetailsComponent },
{path:'automotive-store-details', component: AutomotiveStoreDetailsComponent},
{path:'commercial-store-details', component: CommercialStoreDetailsComponent},
{path:'residential-store-details', component: ResidentialStoreDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreDetailsRoutingModule { }
