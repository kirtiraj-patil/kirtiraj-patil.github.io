import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [
    LandingComponent,
    NavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LandingComponent
  ]
})
export class LandingModule { }
