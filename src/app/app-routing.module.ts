import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { OnlyunivercityComponent } from './components/onlyunivercity/onlyunivercity.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { UnivercityDetailComponent } from './components/univercity-detail/univercity-detail.component';
import { UnivercityNavbarComponent } from './components/univercity-navbar/univercity-navbar.component';
const routes: Routes = [
  {path:"",pathMatch:"full",redirectTo:'/login'},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"main", component:MainComponent ,children:[
    {path:"",component:UnivercityNavbarComponent,children:[
      {path:"",component:UnivercityDetailComponent},
      {path:"univercities/:cityId",component:UnivercityDetailComponent},
      {path:"onlyunivercity/:univercityId",component:OnlyunivercityComponent}  
    ]},
    {path:"profile/:userId", component:ProfileComponent},
  ] },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
