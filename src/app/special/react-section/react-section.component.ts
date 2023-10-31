import { Component } from '@angular/core';

@Component({
  selector: 'app-react-section',
  templateUrl: './react-section.component.html',
  styleUrls: ['./react-section.component.scss']
})
export class ReactSectionComponent {

  ngOnInit() {
    let reactSpecialModule = require('../../../assets/react-bundle.js');
    reactSpecialModule?.default?.render({ selector: 'app-react-section' })
  }
}
