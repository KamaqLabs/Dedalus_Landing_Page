import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-about-product',
  templateUrl: './about-product.html',
  styleUrls: ['./about-product.css'],
  standalone: true
})
export class AboutProductComponent {
  youtubeUrl: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {
    this.youtubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/d_N5kA2hVug');
  }
}
