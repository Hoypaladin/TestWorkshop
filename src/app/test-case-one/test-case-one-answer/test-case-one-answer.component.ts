import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-case-one-answer',
  templateUrl: './test-case-one-answer.component.html',
  styleUrls: ['./test-case-one-answer.component.css']
})
export class TestCaseOneAnswerComponent implements OnInit {
  count = 0;

  ngOnInit() {
    this.count = 0;
  }

  squareIfEven(value: number): number {
    if (value % 2) {
      return value;
    }

    return value * value;
  }

  incrementCount(): void {
    this.count++;
  }

}
