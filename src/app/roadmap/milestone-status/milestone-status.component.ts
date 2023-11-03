import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-milestone-status',
  templateUrl: './milestone-status.component.html',
  styleUrls: ['./milestone-status.component.scss']
})
export class MilestoneStatusComponent {
  @Input() status: string = 'todo';
}
