import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatListModule, MatCardModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule
  ],
  exports: [

    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule
  ],

  declarations: []
})
export class MaterialModule { }
