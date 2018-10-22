import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Kartoşkin BOOM', 'yummy yummy', 'https://www.queplanapp.es/wp-content/uploads/2017/12/large.jpg'),
    new Recipe('Golden Çorbaster', 'Super yummy', 'https://www.queplanapp.es/wp-content/uploads/2017/12/large.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
