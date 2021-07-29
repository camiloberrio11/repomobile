import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NavitaireService {
  constructor(private http: HttpClient) {}

  getInfoRecordLocator() {
    return this.http.get(
      'https://dotrezapi.test.vb.navitaire.com/api/nsk/v1/booking/retrieve/byRecordLocator/BDNK7H'
    );
  }
}
