import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { 
      renderer.setStyle(el.nativeElement,"textTransform","uppercase");
      // renderer.setProperty(el.nativeElement, "innerHTML", el.nativeElement.innerHTML.toUpperCase());
  }
}