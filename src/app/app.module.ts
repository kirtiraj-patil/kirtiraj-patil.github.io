import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LandingModule } from './landing/landing.module';
import { SpecialModule } from './special/special.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LandingModule,
    SpecialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
