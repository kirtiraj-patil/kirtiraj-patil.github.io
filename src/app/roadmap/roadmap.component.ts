import { Component } from '@angular/core';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent {
  milestones = [
    {
      title: "Basic angular portfolio",
      status: "done"
    },
    {
      title: "Mount react app in angular",
      status: "done"
    },
    {
      title: "Accessibility and Lighthouse check",
      status: "done"
    },
    {
      title: "SEO",
      status: "in-progress"
    },
    {
      title: "Backend: Node/Express, Python/Flask integration",
      status: "todo"
    },
    {
      title: "A form for endorsing",
      status: "todo"
    }
  ]

}
