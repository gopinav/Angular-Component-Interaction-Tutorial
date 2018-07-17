import { Component } from '@angular/core';
import { GreetService } from './greet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _greetService: GreetService) { }

  greetStudent() {
    this._greetService.greet('Good Morning');
  }
  appreciateStudent() {
    this._greetService.greet('Well Done');
  }
}
