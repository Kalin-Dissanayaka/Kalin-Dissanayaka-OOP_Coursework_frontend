import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketPoolService {

  constructor() { }

  getTickets(): Observable<any[]> {
    // This should be replaced with an actual HTTP request
    return of([
      { ticketId: 1, customerName: 'John Doe', ticketQuantity: 2, customerRetrievalInterval: 30 },
      // more tickets
    ]);
  }
}
