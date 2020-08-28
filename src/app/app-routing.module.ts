import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthComponent } from './auth/auth.component';
import { LandingPage } from './landing/landing-page.component';
import { RecipesRoutingModule } from './recipes/recipes-routing.module';
import { ShoppingRoutingModule } from './shopping-list/shopping-routing.module';
const routes: Routes = [
  {path: 'home', component: LandingPage},
  {path: '', redirectTo: '/auth', pathMatch: 'full'},
  {path: 'error', component: ErrorPageComponent},
  {path: 'auth', component: AuthComponent},
  {path: '**', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RecipesRoutingModule, ShoppingRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
