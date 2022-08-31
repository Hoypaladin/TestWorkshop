import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCaseOneAnswerComponent } from './test-case-one-answer.component';

xdescribe('TestCaseOneAnswerComponent', () => {
  let component: TestCaseOneAnswerComponent;
  let fixture: ComponentFixture<TestCaseOneAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCaseOneAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCaseOneAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should square even number', () => {
    expect(component.squareIfEven(2)).toEqual(4);
  });

  it('should return odd number', () => {
    expect(component.squareIfEven(1)).toEqual(1);
  });

  it('should increment', () => {
    expect(component.count).toEqual(0);
    component.incrementCount();
    expect(component.count).toEqual(1);
  });
});
