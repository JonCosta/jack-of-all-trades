import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { WishItemFormComponent } from '../wish-item-form/wish-item-form.component';
import { WishItem } from "../../models/wish-item";

@Component({
  selector: 'wish-item-list',
  templateUrl: './wish-item-list.component.html',
  styleUrls: ['./wish-item-list.component.css']
})
export class WishItemListComponent implements OnInit {

  wishItems: WishItem[];
  totalPrice: number;

  constructor(
    public matDialog: MatDialog
  ) {}

  ngOnInit() {
    this.wishItems = [
      new WishItem('Item 1', 214.21),
      new WishItem('Item 2', 17.59),
      new WishItem('Item 3', 67.5),
      new WishItem('Item 4', 49.99),
      new WishItem('Extra Item', 125),
    ];
    
    this.getTotalPrice();
  }

  // ------------------------------------
  // PUBLIC METHODS
  // ------------------------------------

  getTotalPrice() {
    this.totalPrice = 0;
    this.wishItems.forEach(item => {
      this.totalPrice += item.price;
    });
  }

  newItem() {
    const dialogRef = this.matDialog.open(WishItemFormComponent, {
      width: '300px',
      maxHeight: '90%'
    });

    // dialogRef.componentInstance.onNewItem.subscribe(result => {
    //   console.log(result);
    // });
  }



}
