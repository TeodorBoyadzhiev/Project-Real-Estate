import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IApartment } from '../../shared/interfaces';
import { tap } from 'rxjs/operators';

@Injectable()
export class ContentService {

  apartment: IApartment | undefined;


  constructor(private http: HttpClient) { }


  getApartment(id: string) {
    return this.http.get<IApartment>(`/api/apartments/${id}`).pipe(
      tap(apartment => this.apartment = apartment)
    );
  }

  getApartments() {
    return this.http.get<IApartment[]>(`/api/apartments`);
  }

  saveApartment(data: { description: string; location: string; price: number; imageUrl: string }) {
    return this.http.post<IApartment>(`/api/apartments`, data);
  }

  
  editApartment(data: { description: string; location: string; price: number, imageUrl: string; }, id: string) {
    return this.http.put<IApartment>(`/api/apartments/${id}`, data).pipe(
      tap((apartment) => this.apartment = apartment))
  }

}
