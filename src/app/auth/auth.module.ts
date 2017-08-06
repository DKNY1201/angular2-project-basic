import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {SignupComponent} from "./signup/signup.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {SigninComponent} from "./signin/signin.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent
  ],
  imports: [
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule{}
