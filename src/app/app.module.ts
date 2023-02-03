import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// MODULE FOR INSTALL ANY LIBRARY
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// Material Modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ServiceComponent } from './pages/service/service.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './pages/error/error.component';
import { FruitComponent } from './components/fruit/fruit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppleComponent } from './components/apple/apple.component';
import { LimeComponent } from './components/lime/lime.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { HeroComponent } from './components/hero/hero.component';
import { HeroformComponent } from './components/heroform/heroform.component';
import { AddressComponent } from './components/address/address.component';
import { TemplatedrivenformComponent } from './components/templatedrivenform/templatedrivenform.component';
import { TeacherComponent } from './components/teacher/teacher.component';

import { ShortnamePipe } from './shortname.pipe';
import { UserfullnamePipe } from './userfullname.pipe';
import { ParentsComponent } from './components/parents/parents.component';
import { ChildComponent } from './components/child/child.component';
import { SqrtPipe } from './sqrt.pipe';
import { ProjectcontentComponent } from './components/projectcontent/projectcontent.component';
import { UsernameCheckerFormComponent } from './components/username-checker-form/username-checker-form.component';
import { ScrollbacktopComponent } from './components/scrollbacktop/scrollbacktop.component';
import { DescPipePipe } from './pipe/desc-pipe.pipe';
import { LeadsListingComponent } from './components/leads-listing/leads-listing.component';
import { LeadsGridComponent } from './components/leads-grid/leads-grid.component';
import { LeadsToolsComponent } from './components/leads-tools/leads-tools.component';
import { ListProfileComponent } from './components/list-profile/list-profile.component';
import { NameEditorComponent } from './components/name-editor/name-editor.component';
import { AngularFormsComponent } from './components/angular-forms/angular-forms.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { ProductsComponent } from './components/products/products.component';
import { MusicdetailsComponent } from './components/musicdetails/musicdetails.component';
import { CustomchildComponent } from './components/customchild/customchild.component';
import { ApplistComponent } from './components/applist/applist.component';

// project1 with components and pages
// import {HomeComponent} from './project1/pages/home/home.component';
import { StudentComponent } from './project1/components/student/student.component';
import { RegiserComponent } from './components/register/regiser/regiser.component';
import { Project2Component } from './project2/project2.component';
import {HomeComponent} from './project2/pages/home/home.component';
import { EmployeeCreateComponent } from './project2/employee-create/employee-create.component';
import { EmployeeEditComponent } from './project2/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './project2/employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    ErrorComponent,
    FruitComponent,
    AppleComponent,
    LimeComponent,
    HeroComponent,
    HeroformComponent,
    AddressComponent,
    TemplatedrivenformComponent,
    TeacherComponent,
    StudentComponent,
    ShortnamePipe,
    UserfullnamePipe,
    ParentsComponent,
    ChildComponent,
    SqrtPipe,
    ProjectcontentComponent,
    UsernameCheckerFormComponent,
    ScrollbacktopComponent,
    DescPipePipe,
    LeadsListingComponent,
    LeadsGridComponent,
    LeadsToolsComponent,
    ListProfileComponent,
    NameEditorComponent,
    AngularFormsComponent,
    LoginComponent,
    SignupComponent,
    PropertiesComponent,
    ProductsComponent,
    MusicdetailsComponent,
    CustomchildComponent,
    ApplistComponent,
    RegiserComponent,
    Project2Component,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgbModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DateInputsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
