import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-left',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-left.component.html',
  styleUrl: './hero-left.component.css'
})
export class HeroLeftComponent {
  
  name: string = "<Bless Ahadjie />"

}
