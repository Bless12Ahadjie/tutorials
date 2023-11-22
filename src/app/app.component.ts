import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { RadialComponent } from './radial/radial.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavbarComponent,RadialComponent,
    HeroSectionComponent,
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Bless';
  message: string ="Message changed"
  

}
