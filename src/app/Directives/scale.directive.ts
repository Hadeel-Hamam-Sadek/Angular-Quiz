import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[Scale]',
})
export class ScaleDirective {

  constructor(public element: ElementRef) {}
  @HostListener('mouseover') increase() {
    this.element.nativeElement.style.scale = `1.1`;
    this.element.nativeElement.style.transition= `all 2s `;
  }
  @HostListener('mouseout') origin() {
    this.element.nativeElement.style.scale = `1`;
    this.element.nativeElement.style.transition= `all 2s `;

  }
}
