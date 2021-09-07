import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() login = new EventEmitter<boolean>();
  todaysPlate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  checkLoginStatus(loginStatus: boolean): void {
    this.login.emit(loginStatus);
    console.log(loginStatus);
  }

}
