import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FirebaseStorageService } from '../../shared/services/firebase-storage.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  subscription: Subscription;
  constructor(private recipeService: RecipeService, private router: Router,
              private route: ActivatedRoute, private fbService: FirebaseStorageService) { }
  isLoadingRecipe = false;
  error = '';
  ngOnInit() {
    //this.recipes = this.recipeService.getRecipe();
    this.fbService.fetchRecipesFromFirebase().subscribe(
      (response) => {},
      ((errorResponse) => {
        this.isLoadingRecipe = false;
        this.error = errorResponse.error.error;
      })
    );
    this.isLoadingRecipe = true;
    this.subscription = this.recipeService.newRecipeCreated.subscribe(
      (newRecipesList: Recipe[]) => {
        this.recipes = newRecipesList;
        this.isLoadingRecipe = false;
      },
    );
  }
  onCreateNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onClickOut() {
     this.error = null;
  }
}
