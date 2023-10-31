import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialComponent } from './special.component';
import { AngularSectionComponent } from './angular-section/angular-section.component';
import { OtherComponent } from './other/other.component';
import { ReactSectionComponent } from './react-section/react-section.component';



@NgModule({
  declarations: [
    SpecialComponent,
    AngularSectionComponent,
    OtherComponent,
    ReactSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpecialComponent
  ]
})
export class SpecialModule { }
