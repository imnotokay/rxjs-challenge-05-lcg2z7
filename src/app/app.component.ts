import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  interval;
  countDownValue: number;

  constructor() {
    this.countDownValue = 5;
  }

  ngOnInit() {
    this.countDown();
  }

  countDown() {
    this.interval = setInterval(() => {
      this.countDownValue--;
      if (this.countDownValue === 0) {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  restart() {
    this.countDownValue = 5;
    this.countDown();
  }
}
