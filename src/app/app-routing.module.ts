import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [


  {
    path: '', redirectTo: 'home', pathMatch:'full'
  },
  {
    path: 'home', component:HomeComponent
  },
  {
    path: 'contact', component:ContactComponent
  },
  { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },


  { path: 'authenticate', loadChildren: () => import('./authenticate/authenticate.module').then(m => m.AuthenticateModule) },


  { path: 'store-list', loadChildren: () => import('./store-list/store-list.module').then(m => m.StoreListModule) },


  { path: 'store-details', loadChildren: () => import('./store-details/store-details.module').then(m => m.StoreDetailsModule) },


  { path: 'Dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
