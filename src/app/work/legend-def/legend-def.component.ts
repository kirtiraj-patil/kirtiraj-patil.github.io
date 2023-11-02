import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-legend-def',
  templateUrl: './legend-def.component.html',
  styleUrls: ['./legend-def.component.scss']
})
export class LegendDefComponent {
  @Input() variant: string = '';
  @Input() title: string = '';
}
