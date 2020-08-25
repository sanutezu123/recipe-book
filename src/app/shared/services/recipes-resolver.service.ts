import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Recipe } from '../../recipes/recipe.model';
import { FirebaseStorageService } from './firebase-storage.service';
import { Injectable } from '@angular/core';
import { RecipeService } from '../../recipes/recipe.service';
@Injectable({
    providedIn: 'root'
})
export class RecipeResolverService implements Resolve<Recipe[]> {

    constructor( private fbService: FirebaseStorageService, private recipeService: RecipeService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const recipes: Recipe[] = this.recipeService.getRecipe();
        if (recipes.length === 0) {
            return this.fbService.fetchRecipesFromFirebase();
        } else {
            return recipes;
        }
    }
}