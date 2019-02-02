import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialSharedModule } from '../utils/material-shared.module';
import { WishItemListModule } from './wish-item-list/wish-item-list.module';
import { WishListRoutingModule } from './wish-list-routing.module';
import { WishListComponent } from './wish-list.component';
import { WishItemFormComponent } from './wish-item-form/wish-item-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    WishListComponent,
    WishItemFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialSharedModule,
    WishListRoutingModule,
    WishItemListModule
  ],
  entryComponents: [
    WishItemFormComponent
  ]
})
export class WishListModule { }
