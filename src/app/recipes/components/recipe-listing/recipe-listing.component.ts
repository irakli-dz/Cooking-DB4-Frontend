import { Component, OnInit } from "@angular/core";
import { RecipeService } from "../../services/recipe.service";
import { Recipe } from "../../models/recipe";
import { Router } from "@angular/router";

@Component({
  selector: "app-recipe-listing",
  templateUrl: "./recipe-listing.component.html",
  styleUrls: ["./recipe-listing.component.scss"]
})
export class RecipeListingComponent implements OnInit {
  constructor(private recipeService: RecipeService,
            private router: Router) {}
  displayedColumns: string[] = ['item', 'type', 'cousine', 'rate', 'action'];
  dataSource: Recipe[] = [];

  saveBtnHandler() {
    this.router.navigate(['dashboard','recipes','new']);
  }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(
      data => {
        this.dataSource=data;
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }
}
