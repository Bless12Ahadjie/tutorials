import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroImgComponent } from '../hero-img/hero-img.component';
import { HeroLeftComponent } from '../hero-left/hero-left.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule,HeroImgComponent,HeroLeftComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

}
