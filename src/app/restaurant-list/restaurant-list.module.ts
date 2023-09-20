import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantListRoutingModule } from './restaurant-list-routing.module';
import { RestaurantListComponent } from './restaurant-list.component';


@NgModule({
  declarations: [
    RestaurantListComponent
  ],
  imports: [
    CommonModule,
    RestaurantListRoutingModule
  ]
})
export class RestaurantListModule { }
