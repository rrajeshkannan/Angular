import { Component, OnInit } from '@angular/core';
import { Recipe } from '../receipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Test description',
      'https://4.bp.blogspot.com/-JRXLs7ddCBc/VCcFyJ61bhI/AAAAAAAAYvk/hHlvJp0Stmg/s1600/chettinad%2Bbiryani.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
