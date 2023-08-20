import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instfoto',
  templateUrl: './instfoto.component.html',
  styleUrls: ['./instfoto.component.css']
})
export class InstfotoComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}

