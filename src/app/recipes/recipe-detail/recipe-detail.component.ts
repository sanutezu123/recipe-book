import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  private recipeElm: Recipe;
  private id: number;
  constructor(private shoppingListService: ShoppingListService,
              private reviceService: RecipeService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.recipeElm = this.reviceService.getRecipeById(this.id);
    this.route.params.subscribe(
      (params: Params) => {
        this.recipeElm = this.reviceService.getRecipeById(+params['id']);
      }
    );
  }

  toShoppingList() {
     this.shoppingListService.addIngredientsFromRecipe(this.recipeElm.ingredients);
  }

  editRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route});
  }

  deleteRecipe() {
    console.log(this.id);
    this.reviceService.onDeleteById(this.id);
    this.router.navigate(['recipes']);
  }

}
