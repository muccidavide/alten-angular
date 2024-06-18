import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  private _prevColor!: string;
  @Input('appHighlight') public color!:string;

  constructor(private _elRef: ElementRef<HTMLElement>) {
    console.log('directive injected')
   }

  @HostListener('mouseover')
  public highlight(): void {

    this._prevColor = this._elRef.nativeElement.style.backgroundColor;
    this._elRef.nativeElement.style.backgroundColor = this.color || 'yellow';
  }

  @HostListener('mouseout')
  public reset(): void{
    console.log(this._prevColor);
    this._elRef.nativeElement.style.backgroundColor = this._prevColor;
  }

}
