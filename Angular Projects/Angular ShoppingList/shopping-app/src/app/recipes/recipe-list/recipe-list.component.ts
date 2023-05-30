import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'this is simply a test ',
      'https://en.wikipedia.org/wiki/Food#/media/File:Good_Food_Display_-_NCI_Visuals_Online.jpg'
    ),
  ];
  ngOnInit(): void {}
}
