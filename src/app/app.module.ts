import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShortenPipe } from './shared/shorten.pipe';
import { FirebaseStorageService } from './shared/firebase-storage.service';
import { HttpClientModule } from '@angular/common/http';
import { SafePipeModule } from 'safe-pipe';
import { AuthComponent } from './auth/auth.component';
import { CssSpinnerComponent } from './shared/css-spinner/css-spinner.component';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { LandingPage } from './landing/landing-page.component';
import { MatSliderModule } from '@angular/material/slider';
import { ParticlesModule } from 'angular-particle';
import { RecipesContentComponent } from './landing/recipes-content/recipes-content.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    ErrorPageComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    ShortenPipe,
    AuthComponent,
    CssSpinnerComponent,
    LandingPage,
    RecipesContentComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SafePipeModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSliderModule,
    ParticlesModule
  ],
  providers: [RecipeService, ShoppingListService, FirebaseStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
