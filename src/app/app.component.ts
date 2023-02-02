import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isDarkTheme = true;

  constructor(private renderer: Renderer2) {
    this.setTheme();
  }

  public setTheme() {
    if (this.isDarkTheme) {
      this.renderer.removeClass(document.body, 'light');
      this.renderer.addClass(document.body, 'dark');
    } else {
      this.renderer.removeClass(document.body, 'dark');
      this.renderer.addClass(document.body, 'light');
    }
    this.isDarkTheme = !this.isDarkTheme;
  }
}
