import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingContainerComponent } from './landing-container/landing-container.component';
import { BgDesignComponent } from './bg-design/bg-design.component';



@NgModule({
  declarations: [
    LandingContainerComponent,
    BgDesignComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LandingContainerComponent
  ]
})
export class LandingModule { }
