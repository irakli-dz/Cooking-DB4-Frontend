import { Component, OnInit } from "@angular/core";
import { RecipeService } from "../../services/recipe.service";
import { Recipe } from "../../models/recipe";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import {remove} from 'lodash';

@Component({
  selector: 'app-recipe-listing',
  templateUrl: './recipe-listing.component.html',
  styleUrls: ['./recipe-listing.component.scss']
})
export class RecipeListingComponent implements OnInit {

  constructor(private recipeService: RecipeService,
            private router: Router,
            public snackBar: MatSnackBar) {}


  displayedColumns: string[] = ['item', 'type', 'cousine', 'rate', 'action'];
  dataSource: Recipe[] = [];

  saveBtnHandler() {
    this.router.navigate(['dashboard', 'recipes', 'new']);
  }

  deleteBtnHandler(id) {
    this.recipeService.deleteRecipe(id)
    .subscribe(data => {
      const removedItems = remove(this.dataSource, (item) => {
        return item._id === data._id;
      });
      this.dataSource = [...this.dataSource];
      this.snackBar.open('Recipe was deleted', 'Success', {
        duration: 2000
      });
    },
    err => {
      this.errorHandler(err, 'Faield to delete recipe');
      console.error(err);
    });
  }

  editBtnHandler(id) {
    this.router.navigate(['dashboard', 'recipes', id]); 
  }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(
      data => {
        this.dataSource = data;
        console.log(data);
     },
      err => {
        this.errorHandler(err, 'Faield to fetch recipes');
        console.log(err);
      }
    );
  }

  private errorHandler(error, message) {
    console.log(error);
    this.snackBar.open(message, 'Error', {
      duration: 2000
    });
  }
  
}
