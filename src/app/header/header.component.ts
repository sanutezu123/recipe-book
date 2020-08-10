import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { FirebaseStorageService } from '../shared/firebase-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private firebaseStorageService: FirebaseStorageService) { }

  ngOnInit() {
  }

  saveRecipes() {
    this.firebaseStorageService.storeRecipesInFirebase()
    .subscribe(
      ( repsonse ) => {
        console.log( repsonse );
      }
    );
  }
  fetchRecipes() {
    this.firebaseStorageService.fetchRecipesFromFirebase().subscribe();
  }
}
