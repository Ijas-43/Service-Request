import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MyAppoinmentsComponent } from './my-appoinments/my-appoinments.component';
import { ServiceComponent } from './service/service.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [{ path: '', component: DashboardComponent },
{
  path: 'appoinment', component: MyAppoinmentsComponent
},
{
  path: 'service', component:ServiceComponent
},
{
  path: 'profile', component:ProfileComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
