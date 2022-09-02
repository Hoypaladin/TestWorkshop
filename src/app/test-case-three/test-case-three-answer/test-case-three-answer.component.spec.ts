import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { TestCaseThreeAnswerComponent } from './test-case-three-answer.component';

describe('TestCaseThreeAnswerComponent', () => {
  let component: TestCaseThreeAnswerComponent;
  let fixture: ComponentFixture<TestCaseThreeAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCaseThreeAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCaseThreeAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit number', () => {
    let result: number | undefined;
    component.numberEmitter.subscribe(event => result = event);
    component.emitEvent(4);
    expect(result).toEqual(4);
  });

  it('should get value from Observable', (done) => {
    component.getTrueObservable().subscribe(
      (result: boolean) => {
        expect(result).toBeTrue();
        done();
      }
    );
  });

  it('should emit number every second', fakeAsync(() => {
    let counter = 0;
    const subscription = component.getInterval().subscribe(res => counter = res);
    tick(2000);
    expect(counter).toEqual(1);
    tick(1000);
    expect(counter).toEqual(2);
    subscription.unsubscribe();
  }));
});
