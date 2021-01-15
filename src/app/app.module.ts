import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { DepartmentsComponent } from './departments/departments.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    AppointmentsComponent,
    ContactsComponent,
    HomeComponent,
    ServicesComponent,
    DoctorsComponent,
    FooterComponent,
    DepartmentsComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot([
      {path:"",component:HomeComponent},
      {path:"header",component:HeaderComponent},
      {path:"about",component:AboutComponent},
      {path:"appointments",component:AppointmentsComponent},
      {path:"contacts",component:ContactsComponent},
      {path:"doctors",component:DoctorsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
