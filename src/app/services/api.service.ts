import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CustomerRequest {
  customerName: string;
  ticketQuantity: number;
  customerRetrievalRate: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  saveConfiguration: any;
  createVendor(value: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  addCustomer(data: CustomerRequest): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    
    return this.http.post(`${this.apiUrl}/customers/addcustomer`, data, {
      headers: headers
    });
  }
}