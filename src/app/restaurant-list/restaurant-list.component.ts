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
  
  statusOptions = [
    {label: 'Status', value: null},
    {label: 'ACTIVE', value: 'ACTIVE'},
    {label: 'INACTIVE', value: 'INACTIVE'}
  ];
  selectedStatus: 'ACTIVE' | 'INACTIVE' | null = null;

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.fetchRestaurants();
  }

  onPageChange(event: any): void {
    const newPage: number = event;
    this.fetchRestaurants(newPage, this.meta.take);
  }

  onItemsPerPageChange(newTake: number): void {
    this.meta.take = newTake;
    this.fetchRestaurants(1, newTake);
  }

  onStatusFilterChange(): void {
    this.fetchRestaurants(1, this.meta.take);
  }

  private fetchRestaurants(page: number = 1, take: number = 10): void {
    this.restaurantService.getRestaurants(page, take, this.selectedStatus || undefined).subscribe((response: { data: any[]; meta: PaginatorResponse; }) => {
      this.restaurants = response.data;
      this.meta = response.meta;
    });
  }
}
