import { Component, OnInit } from '@angular/core';
import { UsefulService } from '../service/useful.service';

@Component({
  selector: 'app-test-case-two-answer',
  templateUrl: './test-case-two-answer.component.html',
  styleUrls: ['./test-case-two-answer.component.css']
})
export class TestCaseTwoAnswerComponent {

  constructor(private usefulService: UsefulService) { }

  orderNumber(value1: number, value2: number): number[] {
    if (this.usefulService.isLessThan(value1, value2)) {
      return [value1, value2];
    }

    return [value2, value1];
  }

}
