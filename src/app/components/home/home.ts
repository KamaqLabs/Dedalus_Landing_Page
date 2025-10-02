import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar';
import { HeroComponent } from '../hero/hero';
import { FeaturesComponent } from '../features/features';

import { MembersComponent } from '../members/members';
import { ContactComponent } from '../contact/contact';
import { FooterComponent } from '../footer/footer';
import { AboutTeamComponent } from '../about-team/about-team';
import { AboutProductComponent } from '../about-product/about-product';
import { PricingComponent } from '../pricing/pricing';

@Component({
  selector: 'app-home',
  imports: [
    NavbarComponent,
    HeroComponent,
    FeaturesComponent,
    AboutProductComponent,
    AboutTeamComponent,
    PricingComponent,
    MembersComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
