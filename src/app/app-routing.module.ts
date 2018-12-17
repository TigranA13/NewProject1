
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import {HomePageComponent} from "./home-page/home-page.component";

const route : Routes = [
  {path:"",  redirectTo: 'home',  pathMatch: 'full'},
  {path:"home", component: HomePageComponent}
]



@NgModule({
  imports: [
    RouterModule.forRoot(route)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
