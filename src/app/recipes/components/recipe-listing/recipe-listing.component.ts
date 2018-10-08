import { Component, OnInit, ViewChild } from "@angular/core";
import { RecipeService } from "../../services/recipe.service";
import { Recipe } from "../../models/recipe";
import { Router } from "@angular/router";
import { MatSnackBar, MatPaginator } from "@angular/material";
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
  resultsLenght = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;

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
    this.paginator.page
    .subscribe(data => {
      this.recipeService.getRecipes({page: ++data.pageIndex, perPage: data.pageSize})
      .subscribe(data => {
        console.log(data);
        this.dataSource = data.docs;
        this.resultsLenght = data.total;
      });   
    },
    err => {
      this.errorHandler(err, 'Faield to fetch recipes');
      console.log(err);
    });
   this.populateRecipes();
  }

  private populateRecipes() {
    this.recipeService.getRecipes({page: 1, perPage: 10}).subscribe(
      data => {
        this.dataSource = data.docs;
        this.resultsLenght = data.total;        
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
