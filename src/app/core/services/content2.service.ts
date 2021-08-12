import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IApartment } from '../../shared/interfaces';

@Injectable()
export class ContentService {



  constructor(private http: HttpClient) { }


  getApartment(id: string) {
    return this.http.get<IApartment>(`/api/apartment`);
  }

  getApartments() {
    return this.http.get<IApartment[]>(`/api/apartments`);
  }

  saveApartment(data: { description: string, location: string, price: number, imageUrl: string }) {
    console.log(data)
    return this.http.post<IApartment>(`/api/apartments`, data);
  }

}
