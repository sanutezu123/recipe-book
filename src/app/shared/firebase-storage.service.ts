import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { User} from '../models/user.model';
import { RecipeBook } from '../recipes/recipeBook.model';
import { forEach } from '@angular/router/src/utils/collection';
import { CommonUtil } from './util.service';
@Injectable()
export class FirebaseStorageService {
    private firebaseEndpoint = 'https://recipe-book-304d1.firebaseio.com/';
    currentUserEmail = '';
    constructor(private http: HttpClient, private recipeService: RecipeService,
                 private authService: AuthService, private util: CommonUtil) {} ;

    storeRecipesInFirebase() {
        return this.authService.user.pipe(take(1),
            exhaustMap( user => {
                const recipeBook = new RecipeBook(user.email, this.recipeService.getRecipe());
                return this.http.put(this.firebaseEndpoint + this.util.generateID(user.email) + '_recipes.json', recipeBook, {
                    params: new HttpParams().set('auth', user.token)
                });
            })
        );
    }
    fetchRecipesFromFirebase() {
         console.log('fetch recipes');
         return this.authService.user.pipe(take(1),
            exhaustMap( user => {
                console.log('token' + user.token);
                this.currentUserEmail = user.email;
                return this.http.get<RecipeBook>(this.firebaseEndpoint + this.util.generateID(user.email) + '_recipes.json', {
                    params: new HttpParams().set('auth', user.token)
                });
            }),
            map( recipeBook => {
                if(recipeBook === null) {
                    return [];
                }
              //  let keys = Object.keys(recipeBook);
                const recipes = recipeBook.recipes;
                // keys.forEach( key => {
                //      if(recipeBook[key].recipeBookId === this.currentUserEmail ){
                //         recipes.push(...recipeBook[key].recipes);
                //     }
                //  });
                return recipes.map( recipe => {
                    console.log("Rec"+recipe);
                    return {
                         ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []
                     };
                });
            }),
            tap( recipes => {
               this.recipeService.setRecipes(recipes);
           })
        );
    }
}
