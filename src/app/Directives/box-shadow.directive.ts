import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[BoxShadow]'
})
export class BoxShadowDirective {

  constructor(public element:ElementRef) {

 }
 @HostListener('mouseover') increase(){
  this.element.nativeElement.style.boxShadow=`3px 3px 5px 6px #ccc`

 }
 @HostListener('mouseout') origin(){
  this.element.nativeElement.style.boxShadow= `0 0 0 0` ;

 }

}
