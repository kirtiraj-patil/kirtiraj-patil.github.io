import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { HeaderComponent } from './header.component';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [
    LogoComponent,
    HeaderComponent,
    NavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
