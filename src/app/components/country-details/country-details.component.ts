import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetails {
  country: any;

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.country = this.countryService.country;
  }
}
