import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerFormRoutingModule } from './manager-form-routing.module';
import { ManagerFormComponent } from './manager-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    ManagerFormComponent
  ],
  imports: [
    CommonModule,
    ManagerFormRoutingModule,
    ReactiveFormsModule,
    MessageModule,
    ButtonModule,
    InputTextModule
  ]
})
export class ManagerFormModule { }
