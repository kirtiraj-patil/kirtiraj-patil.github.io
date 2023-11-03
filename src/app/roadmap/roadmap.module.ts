import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconsModule } from '@ng-icons/core';
import { heroCheckCircleSolid, heroClockSolid } from '@ng-icons/heroicons/solid';
import { RoadmapComponent } from './roadmap.component';
import { MilestoneStatusComponent } from './milestone-status/milestone-status.component';
import { MilestoneComponent } from './milestone/milestone.component';



@NgModule({
  declarations: [
    RoadmapComponent,
    MilestoneStatusComponent,
    MilestoneComponent
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({ heroCheckCircleSolid, heroClockSolid })
  ],
  exports: [
    RoadmapComponent
  ]
})
export class RoadmapModule { }
