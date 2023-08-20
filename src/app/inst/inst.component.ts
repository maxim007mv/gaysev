import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inst',
  templateUrl: './inst.component.html',
  styleUrls: ['./inst.component.css']
})
export class InstComponent implements OnInit{


    constructor() { }

    ngOnInit(): void {
      window.scrollTo(0, 0);
    }

  }

