import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {

  constructor() { }

  firstToggle: boolean;

  onFormSubmit() {
    alert(`You submitted the form.`);
  }

}
