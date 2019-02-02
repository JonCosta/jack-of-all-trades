import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule, MatToolbarModule, MatButtonModule, MatSelectModule, MatDialogModule, MatInputModule } from "@angular/material";

@NgModule({
  imports: [
    FlexLayoutModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule
  ],
  exports: [
    FlexLayoutModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule
  ]
})
export class MaterialSharedModule { }