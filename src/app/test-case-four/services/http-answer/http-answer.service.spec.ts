import { TestBed } from '@angular/core/testing';

import { HttpAnswerService } from './http-answer.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('HttpAnswerService', () => {
  let service: HttpAnswerService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(HttpAnswerService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get number from http', () => {
    service.getNumberFromHttp().subscribe(
      (res) => expect(res).toEqual(3)
    );
    
    const req = httpTestingController.expectOne('url.com');
    req.flush(3);
    httpTestingController.verify();
  });

  it('should receive 404 error', () => {
    service.getNumberFromHttp().subscribe({
      next: () => fail,
      error: (err) => { expect(err.status).toEqual(404) }
    });

    httpTestingController.expectOne('url.com').error(
      new ProgressEvent('HTTP error'),
      {
        status: 404,
        statusText: 'Not found'
      }
    );

    httpTestingController.verify();
  })
});
