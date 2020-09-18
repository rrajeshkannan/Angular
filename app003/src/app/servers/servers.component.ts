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
  servers = ['TestServer-1', 'TestServer-2'];

  constructor() {}

  ngOnInit(): void {}

  onCreateServer(): void {
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server ' + this.serverName + ' is created';
    this.serverCreated = true;
  }
}
