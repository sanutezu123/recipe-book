import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  // recipe: Recipe = null;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    // this.recipeService.selectedRecipe.subscribe(
    //   (recipe: Recipe) => {
    //     this.recipe = recipe;
    //   }
    // );
  }

}
