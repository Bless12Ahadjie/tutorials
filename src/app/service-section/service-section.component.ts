import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../interfaces/card-Interfaces';
import { CardModule } from 'primeng/card';
// import { AnimateOnScrollModule } from 'primeng/animateonscroll';
@Component({
  selector: 'app-service-section',
  standalone: true,
  imports: [CommonModule, CardModule,],
  templateUrl: './service-section.component.html',
  styleUrl: './service-section.component.css'
})
export class ServiceSectionComponent {


  cardData : Card[] = [
    {
      id: 1,
      title: 'UI/UX Design',
      description:
        'Within my portfolio, UI/UX Design is the canvas where aesthetics and usability harmonize. I meticulously create and optimize user interfaces, ensuring that each design not only looks remarkable but also performs flawlessly. Let me elevate your digital presence through design.',
      icon: ""
    },
    {
      id: 2,
      title: 'Front-End Development',
      description:
        'In my portfolio, Front-End Development is where I shine. I specialize in crafting user-friendly and visually captivating web applications that leave a lasting impact. From responsive design to seamless interactions, I take your concepts and turn them into immersive digital experiences.',
        icon: ""
      },
    {
      id: 3,
      title: 'Tutoring & Training',
      description:
        "In addition to showcasing my work, I also offer Tutoring & Training services. Whether you're just starting or looking to enhance your skills, I provide personalized training programs in web development and design. Empower yourself and your team with the expertise I've gained through my portfolio journey.",
        icon: ""
    },
  ];

}