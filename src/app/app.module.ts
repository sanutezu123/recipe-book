import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirebaseStorageService } from './shared/services/firebase-storage.service';
import { HttpClientModule } from '@angular/common/http';
import { SafePipeModule } from 'safe-pipe';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { LandingPage } from './landing/landing-page.component';
import { MatSliderModule } from '@angular/material/slider';
import { ParticlesModule } from 'angular-particle';
import { AlertComponent } from './alert-component/alert.component';
import { HamburgerComponent } from './header/temp/hamburger/hamburger.component';
import { RecipesModule } from './recipes/recipes.module';
import { AuthModule } from './auth/auth.module';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ErrorPageComponent,
    LandingPage,
    AlertComponent,
    HamburgerComponent
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
    ParticlesModule,
    RecipesModule,
    AuthModule,
    SharedModule
  ],
  providers: [RecipeService, ShoppingListService, FirebaseStorageService],
  bootstrap: [AppComponent],
  entryComponents: [AlertComponent]
})
export class AppModule { }
