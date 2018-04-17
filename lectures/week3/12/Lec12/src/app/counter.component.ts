import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <span>
      <input type='button' value="-" (click)="decrement($event)" />
      {{counterValue}}
      <input type='button' value="+" (click)="increment($event)" />
    </span>
  `,
  styles: [`span{border:1px solid orange; padding: 10px; margin: 10px;}`]
})
export class CounterComponent implements OnInit {

  counterValue = 0;

  constructor() { }

  ngOnInit() {
  }

  increment(e) {
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
  }

  decrement(e) {
    this.counterValue--;
    this.counterChange.emit(this.counterValue);
  }

  @Input()
  set counter(value:number) {
    this.counterValue = value;
  }

  @Output()
  counterChange = new EventEmitter();
}
