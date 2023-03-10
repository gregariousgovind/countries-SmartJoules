import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'country-cards',
  templateUrl: './country-cards.component.html',
  styleUrls: ['./country-cards.component.scss'],
})
export class CountryCards {
  public cards: any;
  searchTerm: string;
  filteredCards: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://restcountries.com/v3.1/all').subscribe((res) => {
      this.cards = res;
      this.filteredCards = this.cards;
    });
  }

  search() {
    this.filteredCards = this.cards.filter((card) => {
      return card.name.common
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase());
    });
  }
}
