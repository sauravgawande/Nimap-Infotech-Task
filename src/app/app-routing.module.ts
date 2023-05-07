import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { FormPopoutComponent } from './form-popout/form-popout.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  
  {path:"preview",component:FormPopoutComponent},
  {path:"**",redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
