import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { AutomotiveServiceComponent } from './automotive-service/automotive-service.component';
import { CommercialServiceComponent } from './commercial-service/commercial-service.component';
import { ResidentialServiceComponent } from './residential-service/residential-service.component';

const routes: Routes = [{ path: '', component: PagesComponent },
{
  path:'automotive', component:AutomotiveServiceComponent
},
{
  path: 'commercial', component:CommercialServiceComponent
},
{
  path: 'residential', component:ResidentialServiceComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
