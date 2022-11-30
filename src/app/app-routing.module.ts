
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServiceComponent } from './pages/service/service.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './pages/error/error.component';


// LOGIN / SIGNUP / PROPERTIES PAGE
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PropertiesComponent } from './components/properties/properties.component';

// const routes: Routes = [
//   {
//     path:'',
//     redirectTo:'login',
//     pathMatch:'full'
//   },
//   {
//     path:'login',
//     component:LoginComponent
//   },
//   {
//     path:'signup',
//     component:SignupComponent
//   },
//   {
//     path:'properties',
//     component:PropertiesComponent
//   },
// ]


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'service',
    component: ServiceComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    component: ErrorComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
