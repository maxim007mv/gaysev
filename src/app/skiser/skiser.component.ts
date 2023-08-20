import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skiser',
  templateUrl: './skiser.component.html',
  styleUrls: ['./skiser.component.css']
})
export class SkiserComponent implements OnInit{
  onstructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
