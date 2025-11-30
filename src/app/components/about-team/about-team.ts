import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-about-team',
  templateUrl: './about-team.html',
  styleUrls: ['./about-team.css'],
  standalone: true
})
export class AboutTeamComponent {
  youtubeUrl: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {
    this.youtubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/uSdF15-84II');
  }
}
