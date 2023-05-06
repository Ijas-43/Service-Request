import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreListComponent } from './store-list.component';
import { AutomotiveStoreListComponent } from './automotive-store-list/automotive-store-list.component';
import { CommercialStoreListComponent } from './commercial-store-list/commercial-store-list.component';
import { ResidentialStoreListComponent } from './residential-store-list/residential-store-list.component';

const routes: Routes = [{ path: '', component: StoreListComponent },
{path: 'automotive-store-list',component: AutomotiveStoreListComponent},
{path: 'commercial-store-list',component: CommercialStoreListComponent},
{path: 'residential-store-list',component: ResidentialStoreListComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreListRoutingModule { }
