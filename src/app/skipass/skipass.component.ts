import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skipass',
  templateUrl: './skipass.component.html',
  styleUrls: ['./skipass.component.css']
})
export class SkipassComponent implements OnInit  {
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}

