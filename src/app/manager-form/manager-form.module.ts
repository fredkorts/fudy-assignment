import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerFormRoutingModule } from './manager-form-routing.module';
import { ManagerFormComponent } from './manager-form.component';


@NgModule({
  declarations: [
    ManagerFormComponent
  ],
  imports: [
    CommonModule,
    ManagerFormRoutingModule
  ]
})
export class ManagerFormModule { }
