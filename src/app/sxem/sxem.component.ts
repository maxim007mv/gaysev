import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sxem',
  templateUrl: './sxem.component.html',
  styleUrls: ['./sxem.component.css']
})
export class SxemComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}

