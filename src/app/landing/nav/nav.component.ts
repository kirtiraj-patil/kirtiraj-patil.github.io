import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('fadeInNav', [
      transition(':enter', [
        style({opacity: 0}),
        animate('1s 4s linear', style({opacity: 1}))
      ])
    ]),
  ]
})
export class NavComponent {

}
