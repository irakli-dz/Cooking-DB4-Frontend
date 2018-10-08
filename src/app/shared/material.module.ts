import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule,
      MatCheckboxModule,
       MatIconModule,
       MatToolbarModule,
       MatListModule,
       MatCardModule,
       MatTableModule,
       MatMenuModule,
       MatFormFieldModule,
       MatInputModule,
       MatSnackBarModule,
       MatPaginatorModule} from '@angular/material';

import {MatSidenavModule} from '@angular/material/sidenav';

const exportedMatModules = [
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatTableModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
MatPaginatorModule];


@NgModule({
  imports: [
    CommonModule,
    ...exportedMatModules

  ],
  exports: [

    ...exportedMatModules
  ],

  declarations: []
})
export class MaterialModule { }
