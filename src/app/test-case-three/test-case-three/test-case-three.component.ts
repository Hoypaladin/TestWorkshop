import { Component, EventEmitter, Output } from '@angular/core';
import { interval, Observable, of } from 'rxjs';

@Component({
  selector: 'app-test-case-three',
  templateUrl: './test-case-three.component.html',
  styleUrls: ['./test-case-three.component.css']
})
export class TestCaseThreeComponent {
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
