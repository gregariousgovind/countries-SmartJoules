import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class Card {
  @Input() card;

  constructor(private router: Router, private countryService: CountryService) {}

  goToCountry() {
    this.countryService.country = this.card;
    this.router.navigate(['/country']);
  }
}
