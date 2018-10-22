import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFature = feature;
  }
}
