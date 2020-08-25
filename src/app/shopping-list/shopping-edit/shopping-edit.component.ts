import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/model/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @Output() getIngredient = new EventEmitter<{ingredientElm: Ingredient}>();
  @ViewChild('f') form: NgForm;
  subscription: Subscription ;
  ingredient: Ingredient;
  editMode = false;
  editIndex: number;
  // @ViewChild('ingredientRef') ingredientRef: ElementRef;
  // @ViewChild('amountRef') amountRef: ElementRef;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.selectedIngredient.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editIndex = index;
        this.ingredient = this.shoppingListService.getSelectedIngredient(index);
        this.form.setValue(
           {ingredient: this.ingredient.name, amount: this.ingredient.amount}
          );
      }
    )
  }
  // addIngredient() {
  //    let ig = new Ingredient(this.ingredientRef.nativeElement.value, this.amountRef.nativeElement.value)
  //    this.shoppingListService.addIngredients(ig);
  // }

  onShoppinListFormSubmit(form: NgForm) {
    const ig = new Ingredient(form.value.ingredient, form.value.amount);
    if (this.editMode ) {
      this.shoppingListService.updateIngredient(this.editIndex, ig);
      this.editMode = false;
    } else {
      this.shoppingListService.addIngredients(ig);
    }
    form.reset();
  }

  onClear(form: NgForm) {
    form.reset();
    this.editMode = false;
  }

  onDeleteIngredient() {
    this.shoppingListService.deleteIngredients(this.editIndex);
    this.editMode = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
