import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyArwXOnzCqnAf9omXLkm5heSTnzjChQNU4',
      authDomain: 'ng-food-book-2ac3c.firebaseapp.com',
    });
  }
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
