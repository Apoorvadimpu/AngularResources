import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  Errormessage:string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data:Data) => {
        this.Errormessage=data['message'];
      }
    )

  }

}
