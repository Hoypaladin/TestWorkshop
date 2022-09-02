import { ComponentFixture, TestBed } from '@angular/core/testing';
import {  Router } from '@angular/router';
import { UsefulService } from '../service/useful.service';

import { TestCaseTwoAnswerComponent } from './test-case-two-answer.component';

describe('TestCaseTwoAnswerComponent', () => {
  let component: TestCaseTwoAnswerComponent;
  let fixture: ComponentFixture<TestCaseTwoAnswerComponent>;
  let service: UsefulService;

  const mockRouter: jasmine.SpyObj<Router> = jasmine.createSpyObj({
    navigateByUrl: null
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCaseTwoAnswerComponent ],
      providers: [
        { provide: Router, useValue: mockRouter }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCaseTwoAnswerComponent);
    service = TestBed.inject(UsefulService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should order number', () => {
    spyOn(service, 'isLessThan').and.returnValue(true);

    expect(component.orderNumber(1, 2)).toEqual([1, 2]);
  });

  it('should navigate to URL', () => {
    component.navigateToUrl('url');

    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('url');
  });
});
