import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipes/recipe.service';

@Component({
  selector: 'app-recipes-content',
  templateUrl: './recipes-content.component.html',
  styleUrls: ['./recipes-content.component.css']
})
export class RecipesContentComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    
  }

}
