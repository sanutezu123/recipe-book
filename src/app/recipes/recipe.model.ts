import { Ingredient } from '../shared/ingredient.model';
import { SafeResourceUrl } from '@angular/platform-browser';

export class Recipe{
    public id: number;
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];
    public videoPath: string;
    public safeVideoPath: SafeResourceUrl;
    // tslint:disable-next-line:max-line-length
    constructor(id: number, name: string, description: string, imagePath: string, ingredients: Ingredient[], videoPath: string, safeVideoPath: SafeResourceUrl) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.id = id;
        this.ingredients = ingredients;
        this.videoPath = videoPath;
        this.safeVideoPath = safeVideoPath;
    }
}
