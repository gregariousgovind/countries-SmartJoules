import { Component, Input } from '@angular/core';
// import { Router } from '@angular/router';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class Card {
  @Input() card;

  // constructor(private router: Router) {}

  goToCountry(id: number) {
    // this.router.navigate(['/user', id]);
  }
}
