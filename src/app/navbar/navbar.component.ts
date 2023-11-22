import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavChildComponent} from '../nav-child/nav-child.component'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,NavChildComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  {
  title : string = "List of Posts";
  desktopMode: boolean = true;



}
