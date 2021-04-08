import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UnivercityDetailComponent } from './components/univercity-detail/univercity-detail.component';

const routes: Routes = [
  {path:"", component:UnivercityDetailComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
