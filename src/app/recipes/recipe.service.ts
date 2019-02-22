import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'http://www.mucizelezzetler.com/recipes/PublishingImages/0/3/716/hellimli-kadayifli-sinitzel.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)],
    ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://edge.alluremedia.com.au/m/l/2016/07/iStock_77993281_LARGE.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)],
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  // addRecipe(recipe: Recipe) {} TODO

  // updateRecipe(index: number, newRecipe: Recipe) {}
}
