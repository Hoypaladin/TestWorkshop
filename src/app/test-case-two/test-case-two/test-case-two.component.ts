import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsefulService } from '../service/useful.service';

@Component({
  selector: 'app-test-case-two',
  templateUrl: './test-case-two.component.html',
  styleUrls: ['./test-case-two.component.css']
})
export class TestCaseTwoComponent {

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
