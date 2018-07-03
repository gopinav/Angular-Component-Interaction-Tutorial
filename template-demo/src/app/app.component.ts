import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Angular Component Interaction';
  imgUrl = 'https://picsum.photos/200';
  count = 0;
  name: string;
  userName: string;
  private _customerName: string;

  get customerName(): string {
    return this._customerName;
  }

  set customerName(value: string) {
    if (value === 'Vishwas') {
      alert('Hello Vishwas!');
    }
    this._customerName = value;
  }

  incrementCounter() {
    this.count += 1;
  }

  greetVishwas(updatedValue) {
    if (updatedValue === 'Vishwas') {
      alert('Welcome back Vishwas');
    }
    this.userName = updatedValue;
  }
}
