import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { MainContentComponent } from "./components/main-content/main-content.component";
import { RecipeListingComponent } from "../recipes/components/recipe-listing/recipe-listing.component";
import { CousineListingComponent } from "../cousines/components/cousine-listing/cousine-listing.component";
import { RecipeFormComponent } from "../recipes/components/recipe-form/recipe-form.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "recipes",
        component: RecipeListingComponent
      },
      {
        path: "recipes/new",
        component: RecipeFormComponent
      },
      {
        path: "cousines",
        component: CousineListingComponent
      },
      {
        path: "**",
        component: RecipeListingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
