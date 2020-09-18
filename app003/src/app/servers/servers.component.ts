import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: [
    '/node_modules/bootstrap/dist/css/bootstrap.min.css',
    './servers.component.css',
  ],
})
export class ServersComponent implements OnInit {
  serverName = '';
  serverCreationStatus = 'No server is created yet';
  serverCreated = false;

  constructor() {}

  ngOnInit(): void {}

  onCreateServer(): void {
    this.serverCreationStatus = 'Server ' + this.serverName + ' is created';
    this.serverCreated = true;
  }
}
