import { Component, OnInit } from '@angular/core';
import { textContent } from 'src/app/utility/content';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  sliderContent: any = textContent.home.silder;
  constructor() { }

  ngOnInit(): void {
  }

}
