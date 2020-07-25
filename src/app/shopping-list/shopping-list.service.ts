import { Ingredient } from '../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Injectable()
export class ShoppingListService {
     updatedList = new EventEmitter<Ingredient[]>();
     ingredientList: Ingredient [] = [];

    addIngredients(ingredient: Ingredient) {
         this.ingredientList.push(ingredient);
         this.updatedList.emit(this.ingredientList.slice());
    }
    addIngredientsFromRecipe(ingredients: Ingredient[]) {
         this.ingredientList.push(...ingredients);
         this.updatedList.emit(this.ingredientList.slice());
    }
    getIngredients() {
         return this.ingredientList.slice();
    }

}
