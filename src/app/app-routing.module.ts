import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { OnlyunivercityComponent } from './components/onlyunivercity/onlyunivercity.component';
import { RegisterComponent } from './components/register/register.component';
import { UnivercityDetailComponent } from './components/univercity-detail/univercity-detail.component';
const routes: Routes = [
  {path:"",pathMatch:"full",redirectTo:'/login'},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"main", component:MainComponent ,children:[
    {path:"",component:UnivercityDetailComponent},
    {path:"univercities/:cityId",component:UnivercityDetailComponent},
    {path:"onlyunivercity/:univercityId",component:OnlyunivercityComponent}
  ] },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
