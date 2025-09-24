import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar';
import { HeroComponent } from '../hero/hero';
import { FeaturesComponent } from '../features/features';
import { MembersComponent } from '../members/members';
import { ContactComponent } from '../contact/contact';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, HeroComponent, FeaturesComponent, MembersComponent, ContactComponent, FooterComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
