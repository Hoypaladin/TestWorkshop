import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCaseThreeComponent } from './test-case-three.component';

describe('TestCaseThreeComponent', () => {
  let component: TestCaseThreeComponent;
  let fixture: ComponentFixture<TestCaseThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCaseThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCaseThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
