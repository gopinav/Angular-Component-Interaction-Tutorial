import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GreetService {

  private _teacherGreetedSource = new Subject<string>();

  teacherGreeted$ = this._teacherGreetedSource.asObservable();

  greet(message: string) {
    this._teacherGreetedSource.next(message);
  }

  constructor() { }
}
