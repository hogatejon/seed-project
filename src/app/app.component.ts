import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{

  loginStatus: boolean = false;

  user = {
    registered: true,
    name: 'Jonathan'
  };

  ngOnInit() {
  }

  outputLoginStatus(event: boolean): void {
    this.loginStatus = event
    console.log('the app component heard the event')
  }

}
