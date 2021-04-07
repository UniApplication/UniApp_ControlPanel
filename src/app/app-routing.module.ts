import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnivercityDetailComponent } from './components/univercity-detail/univercity-detail.component';

const routes: Routes = [
  {path:"", component:UnivercityDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
