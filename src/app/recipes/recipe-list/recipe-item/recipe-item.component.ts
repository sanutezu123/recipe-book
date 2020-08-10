import { Component, OnInit,Input,OnChanges } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { FirebaseStorageService } from 'src/app/shared/firebase-storage.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  constructor( private firebaseStorageService: FirebaseStorageService) { }

  ngOnInit() {
  }
}
