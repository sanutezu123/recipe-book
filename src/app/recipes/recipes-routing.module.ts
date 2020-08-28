import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { AuthGaurd } from '../auth/auth.gaurd';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeResolverService } from '../shared/services/recipes-resolver.service';
import { Router, RouterModule } from '@angular/router';

const routes = [
    {path: 'recipes', component: RecipesComponent, canActivate: [AuthGaurd], children: [
        {path: '', component: RecipeStartComponent},
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component: RecipeDetailComponent, resolve: [RecipeResolverService]},
        {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolverService]}
      ] },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule {

}