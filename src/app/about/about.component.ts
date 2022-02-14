import { Component, OnInit } from '@angular/core';
import { textContent } from '../utility/content';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutContent: any = textContent.aboutUs;
  constructor() { }

  ngOnInit(): void {
  }

}
