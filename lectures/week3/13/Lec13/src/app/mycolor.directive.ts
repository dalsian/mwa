import { Directive, HostListener, ElementRef, Renderer2, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {

  @Output()
  colorChange = new EventEmitter();

  constructor(private el:ElementRef, private renderer: Renderer2) {
    
  }

  @HostListener('click')
  onClick() {
    // console.log("directive>>>"+this.el.nativeElement.innerHTML);
    this.colorChange.emit(this.el.nativeElement.innerHTML);
  }
}
