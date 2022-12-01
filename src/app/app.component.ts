import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  interval;
  countdownValue: number;

  constructor() {
    this.countdownValue = 5;
  }

  ngOnInit() {
    this.countdown();
  }

  countdown() {
    this.interval = setInterval(() => {
      this.countdownValue--;
      if (this.countdownValue === 0) {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  restart() {
    this.countdownValue = 5;
    this.countdown();
  }
}
