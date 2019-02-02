import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-wish-item-form',
  templateUrl: './wish-item-form.component.html',
  styleUrls: ['./wish-item-form.component.css']
})
export class WishItemFormComponent implements OnInit {

  formWishItem: FormGroup
  onNewItem: EventEmitter<any>;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    // this.onNewItem.emit('test');
    this.formWishItem = this.createForm();
  }

  // ------------------------------------
  // PUBLIC METHODS
  // ------------------------------------

  createForm(): FormGroup {
    return this.formBuilder.group({
      name: [],
      price: [],
      category: [],
      pictureUrl: [],
    });
  }

}
