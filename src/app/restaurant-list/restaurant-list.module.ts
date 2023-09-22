import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { RestaurantListRoutingModule } from './restaurant-list-routing.module';
import { RestaurantListComponent } from './restaurant-list.component';
import { CustomPaginatorComponent } from '../custom-paginator/custom-paginator.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RestaurantListComponent,
    CustomPaginatorComponent
  ],
  imports: [
    CommonModule,
    RestaurantListRoutingModule,
    TableModule,
    ButtonModule,
    MultiSelectModule,
    DropdownModule,
    FormsModule
  ]
})
export class RestaurantListModule { }
