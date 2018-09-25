import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { RecipeListingComponent } from '../recipes/components/recipe-listing/recipe-listing.component';
import { CousineListingComponent } from '../cousines/components/cousine-listing/cousine-listing.component';

const routes: Routes = [{
  path:'',
  component: DashboardComponent,
  children :[{
    path: '',
    component: MainContentComponent },
    {
    path: 'invoices',
    component: RecipeListingComponent },
    {
      path: 'cousines',
      component: CousineListingComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
