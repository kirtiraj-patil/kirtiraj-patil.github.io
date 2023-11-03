import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LandingModule } from './landing/landing.module';
import { SpecialModule } from './special/special.module';
import { WorkModule } from './work/work.module';
import { RoadmapModule } from './roadmap/roadmap.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LandingModule,
    SpecialModule,
    WorkModule,
    RoadmapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
