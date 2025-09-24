import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-members',
  templateUrl: './members.html',
  styleUrls: ['./members.css'],
  standalone: true,
  imports: [MatCardModule, MatIconModule]
})
export class MembersComponent {}
