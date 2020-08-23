import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeResolverService } from './shared/recipes-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { LandingPage } from './landing/landing-page.component';

const routes: Routes = [
  {path: 'home', component: LandingPage},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailComponent, resolve: [RecipeResolverService]},
    {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolverService]}
  ] },
  {path: 'shoppingList', component: ShoppingListComponent },
  {path: 'error', component: ErrorPageComponent},
  {path: 'auth', component: AuthComponent},
  {path: '**', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
