import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('meat', 2),
    new Ingredient('onion', 1),
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
