import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lesson 12 App';

  ComponentCounterValue = 42;

  counterChange(value) {
    this.ComponentCounterValue = value;
  }
}
