import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IApartment, IComment } from '../interfaces';
import { tap } from 'rxjs/operators';

@Injectable()
export class ContentService {

  apartment?: IApartment;


  constructor(private http: HttpClient) { }

  rentApartment(id: string) {
    return this.http.get<IApartment>(`/api/apartments/${id}/rent`).pipe(
      tap((apartment) => this.apartment = apartment));
  }

  getApartment(id: string) {
    return this.http.get<IApartment>(`/api/apartments/${id}`).pipe(
      tap(apartment => this.apartment = apartment)
    );
  }

  getApartments() {
    return this.http.get<IApartment[]>(`/api/apartments`);
  }

  getLatestApartments() {
    return this.http.get<IApartment[]>(`/api/posts`);
  }

  // searchApartments(search: string) {
  //   return this.http.get<IApartment[]>(`/api/posts/search?=${search}`);
  // }

  saveApartment(data: { description: string; location: string; price: number; imageUrl: string }) {
    return this.http.post<IApartment>(`/api/apartments`, data);
  }


  saveComment(comment: string, id: string) {
    return this.http.post<IComment>(`/api/apartments/${id}`, comment);
  }

  editApartment(data: { description: string; location: string; price: number, imageUrl: string; }, id: string) {
    return this.http.put<IApartment>(`/api/apartments/${id}`, data).pipe(
      tap((apartment) => this.apartment = apartment))
  }

  deleteApartment(id: string) {
    return this.http.delete<IApartment>(`/api/apartments/${id}`)

  }

}
