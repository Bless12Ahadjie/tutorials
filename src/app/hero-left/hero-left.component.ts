import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-left',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-left.component.html',
  styleUrl: './hero-left.component.css',
})
export class HeroLeftComponent {
  name: string = '<Bless Ahadjie />';

  downloadCV() {
    const cvUrl = '../../assets/Bless_AhadjieCV_SWE...pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Bless_Ahadjie_cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  contactMe() {
    let emailAddress = 'blaise0ahadjie@gmail.com';

    let mailtoUri = 'mailto:' + emailAddress;

    window.location.href = mailtoUri;
  }
}
