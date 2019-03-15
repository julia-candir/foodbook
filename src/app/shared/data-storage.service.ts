import { AuthService } from './../auth/auth.service';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

  storeRecipes() {
    const req = new HttpRequest(
      'PUT',
      'https://ng-food-book-2ac3c.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(),
      { reportProgress: true },
    );
    return this.httpClient.request(req);

    // return this.httpClient.put(
    //   'https://ng-food-book-2ac3c.firebaseio.com/recipes.json',
    //   this.recipeService.getRecipes(),
    //   {
    //     observe: 'body',
    //     params: new HttpParams().set('auth', token),
    //     // headers: new HttpHeaders().set('Auth', 'Bearer d;fgkdgkdfgk')
    //   },
    // );
  }

  getRecipes() {
    this.httpClient
      // .get<Recipe[]>('https://ng-food-book-2ac3c.firebaseio.com/recipes.json?auth=' + token)
      .get<Recipe[]>('https://ng-food-book-2ac3c.firebaseio.com/recipes.json', {
        observe: 'body',
        responseType: 'json',
      })
      .map(recipes => {
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }

        return recipes;
      })
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
