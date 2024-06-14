import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private _elRef: ElementRef<HTMLElement>) {
    console.log('directive injected')
   }

  @HostListener('click')
  public highlight(): void {
    this._elRef.nativeElement.style.backgroundColor = 'yellow';
  }

}
