import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/restaurant-list', 
    pathMatch: 'full' 
  },
  {
    path: 'restaurant-list',
    loadChildren: () => import('./restaurant-list/restaurant-list.module').then(m => m.RestaurantListModule)
  },
  {
    path: 'restaurant/:restaurantId/manager',
    loadChildren: () => import('./manager-form/manager-form.module').then(m => m.ManagerFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
