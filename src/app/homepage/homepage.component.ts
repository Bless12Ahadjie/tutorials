import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadialComponent } from '../radial/radial.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { ServiceSectionComponent } from '../service-section/service-section.component';
import { AboutComponent } from '../about/about.component';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule,
            RadialComponent,
            HeroSectionComponent,
            ServiceSectionComponent,
            AboutComponent,
            ExperienceComponent

  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
