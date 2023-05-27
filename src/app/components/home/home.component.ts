import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  // localStorage.setItem("token","bhupen");
  }
  sortData(sort: Sort) 
  {
    return;
  }
}
