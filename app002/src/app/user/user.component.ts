import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: [
    '/node_modules/bootstrap/dist/css/bootstrap.min.css',
    './user.component.css'
  ]
})
export class UserComponent implements OnInit {

  userName = '';

  constructor() { }

  ngOnInit(): void {
  }

  onReset(): void {
    this.userName = '';
  }
}
