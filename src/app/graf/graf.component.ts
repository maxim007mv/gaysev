import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graf',
  templateUrl: './graf.component.html',
  styleUrls: ['./graf.component.css']
})
export class GrafComponent implements OnInit {
constructor() {}
ngOnInit(): void {
  window.scrollTo (0, 0)
}
}

