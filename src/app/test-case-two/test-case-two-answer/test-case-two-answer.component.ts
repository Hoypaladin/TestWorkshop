import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsefulService } from '../service/useful.service';

@Component({
  selector: 'app-test-case-two-answer',
  templateUrl: './test-case-two-answer.component.html',
  styleUrls: ['./test-case-two-answer.component.css']
})
export class TestCaseTwoAnswerComponent {

  constructor(
    private usefulService: UsefulService,
    private router: Router
  ) { }

  orderNumber(value1: number, value2: number): number[] {
    if (this.usefulService.isLessThan(value1, value2)) {
      return [value1, value2];
    }

    return [value2, value1];
  }

  navigateToUrl(url: string): void {
    this.router.navigateByUrl(url);
  }

}
