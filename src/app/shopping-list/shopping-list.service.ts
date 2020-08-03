import { Ingredient } from '../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable()
export class ShoppingListService {
     updatedList = new Subject<Ingredient[]>();
     selectedIngredient = new Subject<number>();
     ingredientList: Ingredient [] = [];

    addIngredients(ingredient: Ingredient) {
         this.ingredientList.push(ingredient);
         this.updatedList.next(this.ingredientList.slice());
    }
    addIngredientsFromRecipe(ingredients: Ingredient[]) {
         this.ingredientList.push(...ingredients);
         this.updatedList.next(this.ingredientList.slice());
    }
    getIngredients() {
         return this.ingredientList.slice();
    }

    getSelectedIngredient(index: number) {
          return this.ingredientList[index];
    }

    updateIngredient(index: number, ingredient: Ingredient) {
         console.log(ingredient);
         this.ingredientList[index] = ingredient;
         this.updatedList.next(this.ingredientList.slice());
    }

}