import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsefulService {

  constructor() { }

  isLessThan(value1: number, value2: number): boolean {
    return value1 < value2;
  }
}
