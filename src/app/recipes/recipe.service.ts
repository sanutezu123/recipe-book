import { Recipe } from "./recipe.model";
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
import { FirebaseStorageService } from '../shared/firebase-storage.service';
@Injectable()
export class RecipeService {
     newRecipeCreated = new Subject<Recipe[]>();

     constructor() {}

    //  private recipes: Recipe[] = [
    //     // tslint:disable-next-line:max-line-length
    //     new Recipe(0, 'Gulab Jamun', 'India sweet dish',
    //      'https://du7ybees82p4m.cloudfront.net/56a288e117d3f8.50310584.jpg?width=910&height=512',
    //      [new Ingredient('Milk powder', 3), new Ingredient('Sugar', 2) ]),
    //     // tslint:disable-next-line:no-trailing-whitespace
    //     new Recipe(1, 'Biriyani', 'India Rice Dish', 'https://c.ndtvimg.com/2019-06/s71ihu9_biryani_625x300_05_June_19.jpg',
    //     [new Ingredient('Rice', 1), new Ingredient('Chicken', 1) ]
    //     )
    // ];

    private recipes: Recipe[] = [];
    getRecipe() {
        return this.recipes.slice();
    }
    getRecipeById(id: number) {
        const recipe: Recipe = this.recipes.find(
            (r) => {
                return r.id === id;
            }
        );
        return recipe;
    }

    addRecipe(newRecipe: Recipe) {
        console.log(this.recipes.length + 1);
        newRecipe.id = this.recipes.length + 1;
        this.recipes.push(newRecipe);
        this.newRecipeCreated.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        newRecipe.id = index;
        this.recipes[index-1] = newRecipe;
        this.newRecipeCreated.next(this.recipes.slice());
    }

    onDeleteById(id: number) {
        let indexToDelete = null;
        this.recipes.forEach(
            (recipe: Recipe,index) => {
                console.log(id +' '+recipe.id);
                if(recipe.id === id) {
                    indexToDelete = index;
                }
            }
        )
        this.recipes.splice(indexToDelete,1);
        this.newRecipeCreated.next(this.recipes.slice());
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.newRecipeCreated.next(recipes);
    }
}

