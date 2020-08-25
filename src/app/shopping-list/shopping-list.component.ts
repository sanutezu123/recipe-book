import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/model/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  subscribedIngredientList = new Subscription();
  constructor(private shoppingListService: ShoppingListService) {
    console.log('shoppingList comp loded')
   }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscribedIngredientList = this.shoppingListService.updatedList.subscribe(
      (ingredientList: Ingredient[]) => {
        this.ingredients = ingredientList;
      }
    );
  }
  ngOnDestroy() {
    this.subscribedIngredientList.unsubscribe();
  }

  onSelectedIngreditent(index: number) {
    console.log(index);
    this.shoppingListService.selectedIngredient.next(index);
  }

}
