import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppoinmentDetailsComponent } from './appoinment-details/appoinment-details.component';
import { MenubarComponent } from './menubar/menubar.component';

const routes: Routes = [
  {path:'Appoinment_Details',component:AppoinmentDetailsComponent},
  {path:'',component:MenubarComponent},
  // {path:'',component:},
  // {path:'',component:},
  // {path:'',component:},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
