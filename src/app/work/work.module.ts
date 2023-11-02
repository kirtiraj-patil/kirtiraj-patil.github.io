import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work.component';
import { LegendDefComponent } from './legend-def/legend-def.component';
import { ProjectItemComponent } from './project-item/project-item.component';



@NgModule({
  declarations: [
    WorkComponent,
    LegendDefComponent,
    ProjectItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WorkComponent
  ]
})
export class WorkModule { }
