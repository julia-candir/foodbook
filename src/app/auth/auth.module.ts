import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [FormsModule, AuthRoutingModule],
})
export class AuthModule {}
