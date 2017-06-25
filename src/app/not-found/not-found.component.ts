import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data, Route} from "@angular/router";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  errorMessage: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.errorMessage = this.activatedRoute.snapshot.data['message'];
    this.activatedRoute.data.subscribe(
      (data: Data) => {
        this.errorMessage = data['message'];
      }
    )
  }

}
