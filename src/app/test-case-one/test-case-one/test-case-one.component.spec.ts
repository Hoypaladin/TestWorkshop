import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCaseOneComponent } from './test-case-one.component';

describe('TestCaseOneComponent', () => {
  let component: TestCaseOneComponent;
  let fixture: ComponentFixture<TestCaseOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCaseOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCaseOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
