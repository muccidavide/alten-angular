import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass']
})
export class CounterComponent implements OnChanges{
  @Input() public counter: number = 0;
  @Output() public limitReached: EventEmitter<number> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
     console.log(changes['counter']);
     
  }

  public handleCounter(isSum = true): void {
    isSum ? this.counter++ : this.counter--;

    if (this.counter === 5) {
      this.limitReached.emit(this.counter);
    }
  }
}
