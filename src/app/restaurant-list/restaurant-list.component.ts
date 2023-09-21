import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';

interface PaginatorResponse {
  page: number;
  take: number;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {
  restaurants: any[] = [];
  meta: PaginatorResponse = {
    page: 1,
    take: 10,
    itemCount: 0,
    pageCount: 0,
    hasPreviousPage: false,
    hasNextPage: false
  };

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurantService.getRestaurants(1, 10).subscribe(response => {
      this.restaurants = response.data;
      this.meta = response.meta;
      console.log(this.restaurants);
      console.log(this.meta);
    });
  }

  onPageChange(event: any): void {
    // Your logic here
    console.log('Page changed!', event);
  }
}
