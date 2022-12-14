import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo-project';

  color = 'red';

  thecssiwant = 'background-color: ' + this.color;

  arrayofclass = ['iamhavinggreens', 'someothercolor'];

  theColorHasChangedFunction() {
    this.thecssiwant = 'background-color: ' + this.color;
  }

  pIsClicked() {
    alert('ouch!!');
  }
}
