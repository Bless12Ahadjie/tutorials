import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-follow-bubble',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './follow-bubble.component.html',
  styleUrl: './follow-bubble.component.css'
})
export class FollowBubbleComponent {

  email: string = "@Ahadjiebless1 ";

}
