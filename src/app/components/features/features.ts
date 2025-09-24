import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-features',
  templateUrl: './features.html',
  styleUrls: ['./features.css'],
  standalone: true,
  imports: [MatCardModule, MatIconModule]
})
export class FeaturesComponent {}
