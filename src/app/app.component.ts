import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'alten-angular';
  start = 3;

  public handleLimitReached(n: number): void{
    console.log("raggiunto il numero " + n);
  }
  public handleClick(): void{
    this.title = "ciao"
  }
}
