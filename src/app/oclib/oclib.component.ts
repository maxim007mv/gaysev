import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oclib',
  templateUrl: './oclib.component.html',
  styleUrls: ['./oclib.component.css']
})
export class OclibComponent implements OnInit{
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
