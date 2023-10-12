import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';



@NgModule({
  declarations: [
    LandingComponent,
    NavComponent,
    HeroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LandingComponent
  ]
})
export class LandingModule { }
