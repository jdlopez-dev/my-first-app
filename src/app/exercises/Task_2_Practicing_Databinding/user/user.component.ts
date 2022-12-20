/*
  Create a new component UserComponent and add it to the AppModule.
  1. Add a input field which updates a property username ('UserName') via two-way-binding.
  2. Output the username property via string interpolation (in a paragraph below the input).
  3. Add a button which may only be clicked if the username is NOT an empty string.
  4. Upon clicking the button, the username should be reset to an empty string.
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  username = 'UserName';
  isButtonDisabled = true;

  constructor() {}

  onUpdateUsername(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
    this.isButtonDisabled = this.username === '';
  }

  onResetUsername() {
    this.username = '';
    this.isButtonDisabled = true;
  }
}
