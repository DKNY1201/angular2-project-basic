import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from "app/shared/ingredient.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // @ViewChild('nameInput') ingredientName: ElementRef;
  // @ViewChild('amountInput') ingredientNumber: ElementRef;

  onIngredientAdd(form: NgForm) {
    // const ingName: string = this.ingredientName.nativeElement.value;
    // const ingAmount: number = this.ingredientNumber.nativeElement.value;
    console.log(form);
    const value = form.value;
    const newIngredient: Ingredient = new Ingredient(value.name, value.amount);
    this.shoppingListService.addIngredient(newIngredient);
    // this.shoppingListService.ingredientAdded.emit(new Ingredient(this.ingredientName.nativeElement.value, this.ingredientNumber.nativeElement.value));
  }

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {

  }

}
