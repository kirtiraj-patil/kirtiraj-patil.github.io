import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [
    trigger('fadeInHi', [
      transition(':enter', [
        style({opacity: 0}),
        animate('1s cubic-bezier(.17,.7,.51,1)', style({opacity: 1}))
      ])
    ]),
    trigger('fadeInName', [
      transition(':enter', [
        style({opacity: 0}),
        animate('1s 2s cubic-bezier(.17,.7,.51,1)', style({opacity: 1}))
      ])
    ]),
    trigger('fadeInSubtext', [
      transition(':enter', [
        style({opacity: 0}),
        animate('1s 4s linear', style({opacity: 1}))
      ])
    ]),
    trigger('upDown', [
      state('up', style({
        bottom: '20%'
      })),
      state('down',  style({
        bottom: '15%'
      })),
      transition('up => down', [
        animate('2s 0s ease-in-out')
      ]),
      transition('down => up', [
        animate('2s 0s ease-in-out')
      ]),
    ])
  ]
})
export class HeroComponent {
  onScrollDownButtonClick = () => {
    const whatsSpecialSection = document.getElementById('special')
    whatsSpecialSection?.scrollIntoView({ behavior: "smooth" })
  }

  isUp = true;

  animationDone() {
    this.isUp = !this.isUp;
  }
}
