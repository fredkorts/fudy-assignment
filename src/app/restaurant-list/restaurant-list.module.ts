import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RestaurantListRoutingModule } from './restaurant-list-routing.module';
import { RestaurantListComponent } from './restaurant-list.component';


@NgModule({
  declarations: [
    RestaurantListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RestaurantListRoutingModule
  ]
})
export class RestaurantListModule { }
