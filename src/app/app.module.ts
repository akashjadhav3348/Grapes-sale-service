import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { DashboardBodyComponent } from './dashboard/dashboard-body/dashboard-body.component';
import { DashboardNavComponent } from './dashboard/dashboard-nav/dashboard-nav.component';
import { AllRecordComponent } from './Dashboard/all-record/all-record.component';
import { AddRecordComponent } from './Dashboard/add-record/add-record.component';
import { ProfileComponent } from './Dashboard/profile/profile.component';
import { SettingComponent } from './Dashboard/setting/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutusComponent,
    ContactUsComponent,
    DashboardComponent,
    LoginFormComponent,
    SidebarComponent,
    DashboardBodyComponent,
    DashboardNavComponent,
    AllRecordComponent,
    AddRecordComponent,
    ProfileComponent,
    SettingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboardComponent },
      { path: '', component: LoginFormComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
