import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  private apiUrl = "http://localhost:8080/api/v1";

  constructor(private http: HttpClient) { }

  saveConfig(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/config/post", data);
  }

  getTickets(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/config/get");
  }
}