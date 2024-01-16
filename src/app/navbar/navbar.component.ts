import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavChildComponent} from '../nav-child/nav-child.component'
import { LogoComponent } from '../logo/logo.component';
import { HumburgerComponent } from '../humburger/humburger.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,NavChildComponent,LogoComponent,HumburgerComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  {
  title : string = "List of Posts";
  desktopMode: boolean = true;

  contactMe() {

    var emailAddress = 'blaise0ahadjie@gmail.com';

    var mailtoUri = 'mailto:' + emailAddress;

    // Opening the default email client with a new email
    window.location.href = mailtoUri;
  }



}
