import { Component, Input, OnInit } from '@angular/core';
import { HeaderTitleService } from '../services/header-title.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() user;

  userName: string = 'Jonathan';
  welcomeMessage: string;

  constructor(private readonly headerTitleService: HeaderTitleService) { }

  ngOnInit(): void {
    this.welcomeMessage = this.headerTitleService.getTitle();
  }

}
