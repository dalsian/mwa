import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {

  @HostBinding('class.hide')
  private isHidden:boolean = false;

  constructor() { }

}
