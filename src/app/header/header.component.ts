import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { FirebaseStorageService } from '../shared/firebase-storage.service';
import { AuthService } from '../auth/auth.service';
import { User } from '../models/user.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSubscription: Subscription;
  isAuthenticated = false;
  constructor(private firebaseStorageService: FirebaseStorageService, private authServcie: AuthService,
      private router: Router, private recipeService: RecipeService) { }
  ngOnInit() {
    this.userSubscription = this.authServcie.user.subscribe(
      (user: User) => {
         this.isAuthenticated = !!user;
      }
    );
  }

  saveRecipes() {
    this.firebaseStorageService.storeRecipesInFirebase()
      .subscribe(
        (repsonse) => {
          console.log(repsonse);
        }
      );
  }
  fetchRecipes() {
    this.firebaseStorageService.fetchRecipesFromFirebase().subscribe();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  onLogout() {
    this.authServcie.logout();
    this.recipeService.clear();
    this.router.navigate(['/auth']);
  }
}
