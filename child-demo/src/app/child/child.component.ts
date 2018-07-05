import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  private _loggedIn: boolean;
  message: string;

  get loggedIn(): boolean {
    return this._loggedIn;
  }

  @Input()
  set loggedIn(value: boolean) {
    this._loggedIn = value;
    if (value === true) {
      this.message = 'Welcome back Vishwas!';
    } else {
      this.message = 'Please log in';
    }
  }

  // @Input() loggedIn: boolean;
  constructor() { }

  ngOnInit() {
  }

}
