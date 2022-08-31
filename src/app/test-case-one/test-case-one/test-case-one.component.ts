import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-case-one',
  templateUrl: './test-case-one.component.html',
  styleUrls: ['./test-case-one.component.css']
})
export class TestCaseOneComponent implements OnInit{
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
