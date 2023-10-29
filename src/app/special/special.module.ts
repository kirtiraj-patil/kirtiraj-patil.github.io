import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialComponent } from './special.component';
import { AngularSectionComponent } from './angular-section/angular-section.component';
import { OtherComponent } from './other/other.component';



@NgModule({
  declarations: [
    SpecialComponent,
    AngularSectionComponent,
    OtherComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpecialComponent
  ]
})
export class SpecialModule { }
