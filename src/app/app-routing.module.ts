
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

// import { HomeComponent } from './pages/home/home.component';
// import { AboutComponent } from './pages/about/about.component';
// import { ServiceComponent } from './pages/service/service.component';
// import { ContactComponent } from './pages/contact/contact.component';
// import { ErrorComponent } from './pages/error/error.component';


// LOGIN / SIGNUP / PROPERTIES PAGE
// import { LoginComponent } from './components/login/login.component';
// import { SignupComponent } from './components/signup/signup.component';
// import { PropertiesComponent } from './components/properties/properties.component';
// import { HomeComponent } from './pages/home/home.component';

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


// PROJECT 1 
import {Project2Component} from './project2/project2.component';

import { EmployeeCreateComponent } from './project2/employee-create/employee-create.component';
import { EmployeeEditComponent } from './project2/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './project2/employee-list/employee-list.component';

// const routes:Routes = [
//   {
//     path:'',
//     pathMatch:'full',
//     component:Project2Component
//   },
//   {
//     path:'project',
//     component:Project2Component
//   }
// ]

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'create-employee', component: EmployeeCreateComponent },
  { path: 'employees-list', component: EmployeeListComponent },
  { path: 'employee-edit/:id', component: EmployeeEditComponent },
];



// const routes: Routes = [
//   {
//     path: '',
//     pathMatch: 'full',
//     component: HomeComponent,
//   },
//   {
//     path: 'home',
//     component: HomeComponent
//   },
//   {
//     path: 'about',
//     component: AboutComponent
//   },
//   {
//     path: 'service',
//     component: ServiceComponent
//   },
//   {
//     path: 'contact',
//     component: ContactComponent
//   },
//   {
//     path: '**',
//     component: ErrorComponent
//   },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
