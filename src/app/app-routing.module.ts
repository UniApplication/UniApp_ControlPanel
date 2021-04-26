import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { OnlyunivercityComponent } from './components/onlyunivercity/onlyunivercity.component';
import { OnlyunivercityinfoComponent } from './components/onlyunivercityinfo/onlyunivercityinfo.component';
import { PostmainComponent } from './components/postmain/postmain.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { UnivercityDetailComponent } from './components/univercity-detail/univercity-detail.component';
import { UnivercityListComponent } from './components/univercity-list/univercity-list.component';
import { UnivercityNavbarComponent } from './components/univercity-navbar/univercity-navbar.component';
import { UnivercityaddComponent } from './components/univercityadd/univercityadd.component';
import { UnivercitycommentComponent } from './components/univercitycomment/univercitycomment.component';
import { UnivercitylistUpdateComponent } from './components/univercitylist-update/univercitylist-update.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { LoginGuard } from './guards/login.guard';
const routes: Routes = [
  {path:"",pathMatch:"full",redirectTo:'/login'},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"main", component:MainComponent,canActivate:[LoginGuard] ,children:[
    {path:"profile/:userId", component:ProfileComponent},
    {path:"", component:PostmainComponent},
    {path:"univercityadd", component:UnivercityaddComponent},
    {path:"univercitylist", component:UnivercityListComponent},
    {path:"univercityupdate/:univercityId", component:UnivercitylistUpdateComponent},
    {path:"usersettings", component:UserSettingsComponent},
    {path:"usersettings/:userId", component:UserUpdateComponent},
    {path:"onlyunivercity/:univercityId",component:OnlyunivercityComponent,children:[
      {path:"",component:OnlyunivercityinfoComponent,pathMatch:"full"},
      {path:"comments",component:UnivercitycommentComponent},
    ] },
    {path:"univercity",component:UnivercityNavbarComponent,children:[
      {path:"",component:UnivercityDetailComponent},
      {path:"univercities/:cityId",component:UnivercityDetailComponent},
    ]},

  ] },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
