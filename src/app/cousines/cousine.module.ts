import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CousineListingComponent } from './components/cousine-listing/cousine-listing.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [CousineListingComponent],
  exports: [CousineListingComponent]
})
export class CousineModule { }
