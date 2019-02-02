import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wish-item',
  templateUrl: './wish-item.component.html',
  styleUrls: ['./wish-item.component.css']
})
export class WishItemComponent implements OnInit {

  @Input() wishItem: any;

  constructor() { }

  ngOnInit() {
  }

  // ------------------------------------
  // PUBLIC METHODS
  // ------------------------------------

  edit(wishItem: any) {
    console.log(wishItem);
  }

  remove(wishItem: any) {
    console.log(wishItem);
  }

}
