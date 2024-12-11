import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerFormComponent {

  ticketsData:any = {};
  tickets: any = {};

  constructor(private apiService: ApiService) {}

  ngOnInit():void{
    //this.fetchTickets()
  }

  fetchTickets():void{

    this.apiService.getTickets().subscribe((data)=>{
      this.ticketsData = data;
      this.tickets = this.ticketsData.tickets.sort((a :any, b :any) => a.ticketId - b.ticketId);
    },(error)=>{
      console.error(error);
    })

  }

}