// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { ticket } from '../class/ticket';  

// @Injectable({
//   providedIn: 'root'
// })
// export class TicketPoolService {
//   updateTicketPool(tickets: any[], ticket: any) {
//     throw new Error('Method not implemented.');
//   }
//   private ticketPoolSource = new BehaviorSubject<ticket[]>([]);
//   ticketPool = this.ticketPoolSource.asObservable();

//   constructor() { }

//   addTicket(ticket: ticket) {
//     const currentTickets = this.ticketPoolSource.value;  
//     const updatedTickets = [...currentTickets, ticket];  
//     this.ticketPoolSource.next(updatedTickets); 
//   }

// }
