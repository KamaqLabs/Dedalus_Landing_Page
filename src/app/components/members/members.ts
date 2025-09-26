import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

export interface Member {
  img: string;
  name: string;
  role: string;
  linkedin?: string;
  github?: string;
}

@Component({
  selector: 'app-members',
  templateUrl: './members.html',
  styleUrls: ['./members.css'],
  standalone: true,
  imports: [MatCardModule, MatIconModule, CommonModule]
})
export class MembersComponent {
  members: Member[] = [
    {
      img: 'assets/carpio_profile.jpg',
      name: 'Miguel Carpio',
      role: 'Frontend Developer',
      linkedin: 'https://www.linkedin.com/in/carpiomiguel/',
      github: 'https://github.com/MiguelCarpioC'
    },
    {
      img: 'assets/augusto_profile.jpg',
      name: 'Augusto',
      role: 'IoT Engineer',
      linkedin: '#',
      github: '#'
    },
    {
      img: 'assets/gabriel_profile.png',
      name: 'Gabriel',
      role: 'Backend Developer',
      linkedin: '#',
      github: '#'
    },
    {
      img: 'assets/sihuar_profile.jpg',
      name: 'Sihuar',
      role: 'UX/UI Designer',
      linkedin: '#',
      github: '#'
    },
    {
      img: 'assets/valentino_profile.jpg',
      name: 'Valentino',
      role: 'Otro rol',
      linkedin: '#',
      github: '#'
    }
  ];
}
