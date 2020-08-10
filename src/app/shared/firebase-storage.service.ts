import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { map, tap } from 'rxjs/operators';
@Injectable()
export class FirebaseStorageService {
    private firebaseEndpoint = 'https://recipe-book-304d1.firebaseio.com/';

    constructor(private http: HttpClient, private recipeService: RecipeService) {} ;

    storeRecipesInFirebase() {
        return this.http.put(this.firebaseEndpoint + 'recipes.json', this.recipeService.getRecipe());
    }

    fetchRecipesFromFirebase() {
        return this.http.get<Recipe[]>(this.firebaseEndpoint + 'recipes.json')
        .pipe( map( recipes => {
            return recipes.map( recipe => {
                return {
                    ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []
                };
            });
        }),
            tap( recipes => {
                this.recipeService.setRecipes(recipes);
            })
        );
    }
}
