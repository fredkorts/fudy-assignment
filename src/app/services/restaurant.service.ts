import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private apiUrl = 'https://dev-api.fudy.eu/restaurants';

  constructor(private http: HttpClient) { }

  getRestaurants(page: number, take: number, status?: 'ACTIVE' | 'INACTIVE'): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('take', take.toString());

    if (status) {
      params = params.set('status', status);
    }

    return this.http.get(this.apiUrl, { params });
  }
}
