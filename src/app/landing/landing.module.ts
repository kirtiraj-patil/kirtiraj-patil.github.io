import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconsModule } from '@ng-icons/core';
import { heroChevronDownSolid } from '@ng-icons/heroicons/solid';
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
    CommonModule,
    NgIconsModule.withIcons({ heroChevronDownSolid })
  ],
  exports: [
    LandingComponent
  ]
})
export class LandingModule { }
