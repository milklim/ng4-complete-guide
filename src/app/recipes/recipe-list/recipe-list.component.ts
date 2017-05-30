import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'https://pbs.twimg.com/profile_images/659687546276966404/IcKcC5ca_400x400.png'), 
    new Recipe('A test Recipe 2', 'This is simply a test 2', 'https://pbs.twimg.com/profile_images/659687546276966404/IcKcC5ca_400x400.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
