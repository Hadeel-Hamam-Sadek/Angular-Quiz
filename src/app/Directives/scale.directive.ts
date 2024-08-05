import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[Scale]',
})
export class ScaleDirective {

  constructor(public element: ElementRef) {}
  @HostListener('mouseover') increase() {
    this.element.nativeElement.style.scale = `1.05`;
    this.element.nativeElement.style.transition= `all 1s`;
  }
  @HostListener('mouseout') origin() {
    this.element.nativeElement.style.scale = `1`;
    this.element.nativeElement.style.transition= `all 1s`;

  }
}
