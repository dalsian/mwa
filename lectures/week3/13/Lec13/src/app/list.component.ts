import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <ul appMyvisibility>
      <li *ngFor="let item of strlist" appUpper>{{item}}</li>
    </ul>

    
    <br />
    Select color
    <div [style.background-color]="bg">
    <ul>
      <li appMycolor (colorChange)="colorChange($event)">Red</li>
      <li appMycolor (colorChange)="colorChange($event)">Green</li>
      <li appMycolor (colorChange)="colorChange($event)">Blue</li>
    </ul>
    </div>
  `,
  styles: [`.hide {display:none;}`]
})
export class ListComponent implements OnInit {

  @Input('list')
  strlist:string[];

  bg:string;

  constructor() { }

  ngOnInit() {
  }

  colorChange(value) {
    this.bg = value;
  }

}
