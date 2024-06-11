import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass']
})
export class CounterComponent {
  @Input() public counter: number = 0;
  @Output() public limitReached: EventEmitter<number> = new EventEmitter();

  public handleCounter(isSum = true): void {
    isSum ? this.counter++ : this.counter--;

    if (this.counter === 5) {
      this.limitReached.emit(this.counter);
    }
  }
}
