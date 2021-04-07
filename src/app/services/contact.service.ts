import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';
import { GLOBAL } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private url: string;
  private contType = {
    h: 'Content-Type',
    b: 'application/json',
  };

  constructor(private http: HttpClient) {
    this.url = GLOBAL.API.url;
  }

  sendEmail: (contact: Contact) => Observable<any> = contact => {
    const params = JSON.stringify(contact);
    const headers = new HttpHeaders().set(this.contType.h, this.contType.b);
    return this.http.post(`${this.url}contact`, params, { headers });
  }
}
