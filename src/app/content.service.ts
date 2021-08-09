import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IApartment } from './shared/interfaces';

@Injectable()
export class ContentService {

  
  
  constructor(private http: HttpClient) { }

  getApartments() {
    return this.http.get<IApartment[]>(`/api/apartments`)
      
   
  }

}
