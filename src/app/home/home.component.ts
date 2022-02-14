import { Component, OnInit } from '@angular/core';
import { textContent } from '../utility/content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeContent: any = textContent.home;
  constructor() { }

  ngOnInit(): void {
  }

}
