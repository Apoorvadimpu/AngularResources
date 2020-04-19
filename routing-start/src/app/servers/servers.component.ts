import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, private route:Router,private Router:ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  ReloadPage(){
      this.route.navigate(['servers'], {relativeTo:this.Router} )
  }

}
