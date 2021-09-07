import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{

  loggedIn: boolean = false;
  stylePreference: string;

  user = {
    registered: true,
    name: 'Jonathan'
  };

  ngOnInit() {
  }

  outputLoginStatus(event: boolean): void {
    this.loggedIn = event;
  }

  setStylePreference(pref: string): void {
    this.stylePreference = pref;
  }

  setImportance() {
    if (this.stylePreference === 'hilite') {
      return {
        'background-color': 'yellow'
      };
    } else if (this.stylePreference === 'caps') {
      return {
        'text-transform': 'uppercase'
      }
    }
  }

}
