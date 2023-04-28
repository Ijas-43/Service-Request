import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [


  {
    path: '', redirectTo: 'home', pathMatch:'full'
  },
  {
    path: 'home', component:HomeComponent
  },
  { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },


  { path: 'authenticate', loadChildren: () => import('./authenticate/authenticate.module').then(m => m.AuthenticateModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
