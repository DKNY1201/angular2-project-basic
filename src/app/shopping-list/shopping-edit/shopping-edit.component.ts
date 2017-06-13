import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from "app/shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') ingredientName: ElementRef;
  @ViewChild('amountInput') ingredientNumber: ElementRef;
  @Output() ingredient = new EventEmitter<Ingredient>();

  onIngredientAdd() {
    this.ingredient.emit(new Ingredient(this.ingredientName.nativeElement.value, this.ingredientNumber.nativeElement.value));
  }

  constructor() { }

  ngOnInit() {
  }

}
