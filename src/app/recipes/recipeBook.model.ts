import { Recipe } from './recipe.model';
export class RecipeBook {
    public recipeBookId: string;
    public recipes: Recipe[];
    constructor(recipeBookId: string, recipes: Recipe[]) {
        this.recipeBookId = recipeBookId;
        this.recipes = recipes;
     }
}