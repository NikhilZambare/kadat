import { Component, OnInit } from '@angular/core';
import { MENU } from 'src/app/utility/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuList: any = MENU;
  constructor() { }

  ngOnInit(): void {
  }

}
