import { Component, OnInit } from '@angular/core';
import { textContent } from 'src/app/utility/content';
import { MENU } from 'src/app/utility/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  contactNumber: any = textContent.contact.phone;
  menuList: any = MENU;
  constructor() { }

  ngOnInit(): void {
  }

}
