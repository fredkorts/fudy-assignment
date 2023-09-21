import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RestaurantService } from './restaurant.service';

describe('RestaurantService', () => {
  let service: RestaurantService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RestaurantService]
    });

    service = TestBed.inject(RestaurantService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure that there are no outstanding requests.
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should include status in parameters if provided', () => {
    service.getRestaurants(1, 10, 'ACTIVE').subscribe();

    const request = httpMock.expectOne('https://dev-api.fudy.eu/restaurants?page=1&take=10&status=ACTIVE');
    expect(request.request.method).toBe('GET');
    request.flush({});
  });
});
