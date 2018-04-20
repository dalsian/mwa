import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { 
     renderer.setStyle(el.nativeElement,"textTransform","uppercase");
  }

  ngOnInit() {
    // console.log(this.el.nativeElement.innerHTML);
    // this.renderer.setProperty(this.el.nativeElement, "innerHTML", this.el.nativeElement.innerHTML.toUpperCase());
  }
}