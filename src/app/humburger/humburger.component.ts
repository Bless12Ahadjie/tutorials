import { Component ,HostListener,ElementRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-humburger',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './humburger.component.html',
  styleUrl: './humburger.component.css'
})
export class HumburgerComponent {

  isMenuOpen = false;

  constructor(private elementRef: ElementRef) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isMenuOpen = false;
    }
  }
}
