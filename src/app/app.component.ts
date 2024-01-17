import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { RadialComponent } from './radial/radial.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ServiceSectionComponent } from './service-section/service-section.component';
import { FooterComponent } from './footer/footer.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    NavbarComponent,
    RadialComponent,
    HeroSectionComponent,
    ServiceSectionComponent,
    FooterComponent,
    // BrowserAnimationsModule,
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Bless';
  message: string ="Message changed"
  

}
