import { Component, EventEmitter, Output } from '@angular/core';
import { Observable, of, interval } from 'rxjs';

@Component({
  selector: 'app-test-case-three-answer',
  templateUrl: './test-case-three-answer.component.html',
  styleUrls: ['./test-case-three-answer.component.css']
})
export class TestCaseThreeAnswerComponent {
  @Output() numberEmitter: EventEmitter<number> = new EventEmitter<number>();

  emitEvent(value: number): void{
    this.numberEmitter.emit(value);
  }

  getTrueObservable(): Observable<boolean> {
    return of(true);
  }

  getInterval(): Observable<number> {
    return interval(1000);
  }
}
