import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';
import { RouterModule, Router } from '@angular/router';

const routes = [
    {path: 'shoppingList', component: ShoppingListComponent },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShoppingRoutingModule {
}
