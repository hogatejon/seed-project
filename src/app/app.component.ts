import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{

  loggedIn: boolean = false;

  user = {
    registered: true,
    name: 'Jonathan'
  };

  ngOnInit() {
  }

  outputLoginStatus(event: boolean): void {
    this.loggedIn = event
    console.log('the app component heard the event')
  }

}
