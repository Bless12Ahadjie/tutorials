import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsModule } from 'primeng/steps';
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule,StepsModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

}
