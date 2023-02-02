import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetails {
  country: any;

  constructor(private countryService: CountryService, private router: Router) {}

  ngOnInit() {
    this.country = this.countryService.country;
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
