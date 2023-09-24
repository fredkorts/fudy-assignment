import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerFormRoutingModule } from './manager-form-routing.module';
import { ManagerFormComponent } from './manager-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ManagerFormComponent
  ],
  imports: [
    CommonModule,
    ManagerFormRoutingModule,
    ReactiveFormsModule
  ]
})
export class ManagerFormModule { }
