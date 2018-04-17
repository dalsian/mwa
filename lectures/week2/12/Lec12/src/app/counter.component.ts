import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <input type='button' value="-" (click)="decrement($event)" />
      {{counterValue}}
      <input type='button' value="+" (click)="increment($event)" />
    </div>
  `,
  styles: [``]
})
export class CounterComponent implements OnInit {

  counterValue = 0;

  constructor() { }

  ngOnInit() {
  }

  increment(e) {
    this.counterValue++;
  }

  decrement(e) {
    this.counterValue--;
  }

}
