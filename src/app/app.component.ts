import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'host-app';

  constructor() {
    let yourModule = require('../assets/bundle.js');
    console.log('***', yourModule.default)
  }
}
