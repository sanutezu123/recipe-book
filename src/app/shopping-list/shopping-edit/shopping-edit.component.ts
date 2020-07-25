import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() getIngredient = new EventEmitter<{ingredientElm: Ingredient}>();
  @ViewChild('ingredientRef') ingredientRef: ElementRef;
  @ViewChild('amountRef') amountRef: ElementRef;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }
  addIngredient() {
     let ig = new Ingredient(this.ingredientRef.nativeElement.value, this.amountRef.nativeElement.value)
     this.shoppingListService.addIngredients(ig);
  }
}
