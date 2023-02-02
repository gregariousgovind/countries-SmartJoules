import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetails {
  public cards: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.http.get('https://restcountries.com/v3.1/all').subscribe((res) => {
    //   this.cards = res;
    // });
  }
}
