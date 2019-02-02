import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialSharedModule } from 'src/app/utils/material-shared.module';
import { WishItemListComponent } from './wish-item-list.component';
import { WishItemComponent } from '../wish-item/wish-item.component';

@NgModule({
  declarations: [
    WishItemListComponent,
    WishItemComponent
  ],
  imports: [
    CommonModule,
    MaterialSharedModule
  ],
  exports: [
    WishItemListComponent,
    WishItemComponent
  ]
})
export class WishItemListModule { }
