import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CountryCards } from './components/country-cards/country-cards.component';
import { Card } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CountryService } from './services/country.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [AppComponent, CountryCards, Card],
  providers: [CountryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
