import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCaseTwoComponent } from './test-case-two.component';

describe('TestCaseTwoComponent', () => {
  let component: TestCaseTwoComponent;
  let fixture: ComponentFixture<TestCaseTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCaseTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCaseTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
