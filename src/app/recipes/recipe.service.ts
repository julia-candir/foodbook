import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Kartoşkin BOOM',
            'yummy yummy',
            'https://www.queplanapp.es/wp-content/uploads/2017/12/large.jpg',
            [
                new Ingredient('Potato', 2),
                new Ingredient('More Potato', 2),
                new Ingredient('And Moooore Potato', 2)
            ]),
        new Recipe(
            'Golden Çorbaster',
            'Super yummy',
            'https://www.queplanapp.es/wp-content/uploads/2017/12/large.jpg',
            [
                new Ingredient('Water', 1),
                new Ingredient('Meat', 1),
                new Ingredient('Onion', 1),
                new Ingredient('PotatoPotatoPotato', 1)
            ])
    ];

    constructor(private shoplistService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngToSL(ingredients: Ingredient[]) {
        this.shoplistService.addIngredients(ingredients);
    }
}