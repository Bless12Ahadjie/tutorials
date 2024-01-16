import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadialComponent } from '../radial/radial.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { ServiceSectionComponent } from '../service-section/service-section.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule,
            RadialComponent,
            HeroSectionComponent,
            ServiceSectionComponent

  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
