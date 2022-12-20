/*
* 1. Add a button which says 'Display Details'
* 2. Add a paragraph with any content of your choice
* 3. Toggle the display of the paragraph with the button created in step 1
* 4. Log all button clicks in an array and output that array below the secret paragraph 
(maybe log a timestamp or simply an incrementing number)
* 5. Starting at the 5th log item, give all future log items a blue background(using ngStyle)
and white color (ngClass)
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-practicing-directives',
  templateUrl: './practicing-directives.component.html',
  styleUrls: ['./practicing-directives.component.css'],
})
export class PracticingDirectivesComponent {
  logs = [];
  showDetails = false;

  onDisplayDetails() {
    console.log('onDisplayDetails');
    this.showDetails = !this.showDetails;
    this.logs.push(this.logs.length + 1);
  }
}
