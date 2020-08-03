import { Recipe } from "./recipe.model";
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Injectable()
export class RecipeService {
     private recipes: Recipe[] = [
        // tslint:disable-next-line:max-line-length
        new Recipe(1, 'Gulab Jamun', 'India sweet dish',
         'https://du7ybees82p4m.cloudfront.net/56a288e117d3f8.50310584.jpg?width=910&height=512',
         [new Ingredient('Milk powder', 3), new Ingredient('Sugar', 2) ]),
        // tslint:disable-next-line:no-trailing-whitespace
        
        new Recipe(2, 'Biriyani', 'India Rice Dish', 'https://c.ndtvimg.com/2019-06/s71ihu9_biryani_625x300_05_June_19.jpg',
        [new Ingredient('Rice', 1), new Ingredient('Chicken', 1) ]
        )
    ];

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
}

