import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import {ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UnivercityDetailComponent } from './components/univercity-detail/univercity-detail.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CityComponent } from './components/city/city.component';
import { UnivercityPipe } from './pipes/univercity.pipe';
import { CityPipe } from './pipes/city.pipe';
import { MainComponent } from './components/main/main.component';
import { OnlyunivercityComponent } from './components/onlyunivercity/onlyunivercity.component';
import { UnivercityNavbarComponent } from './components/univercity-navbar/univercity-navbar.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    UnivercityDetailComponent,
    LoginComponent,
    RegisterComponent,
    CityComponent,
    UnivercityPipe,
    CityPipe,
    MainComponent,
    OnlyunivercityComponent,
    UnivercityNavbarComponent,
    ProfileComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
    ToastrModule.forRoot({

      positionClass:"toast-bottom-right"
      
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
