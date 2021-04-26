import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';


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
import { PostmainComponent } from './components/postmain/postmain.component';
import { UnivercityaddComponent } from './components/univercityadd/univercityadd.component';
import { UnivercitycommentComponent } from './components/univercitycomment/univercitycomment.component';
import { OnlyunivercityinfoComponent } from './components/onlyunivercityinfo/onlyunivercityinfo.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { UnivercityListComponent } from './components/univercity-list/univercity-list.component';
import { UnivercitylistpipePipe } from './pipes/univercitylistpipe.pipe';
import { UnivercitylistUpdateComponent } from './components/univercitylist-update/univercitylist-update.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';


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
    PostmainComponent,
    UnivercityaddComponent,
    UnivercitycommentComponent,
    OnlyunivercityinfoComponent,
    UserSettingsComponent,
    UnivercityListComponent,
    UnivercitylistpipePipe,
    UnivercitylistUpdateComponent,
    UserUpdateComponent,
 
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
  providers: [{
    provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
