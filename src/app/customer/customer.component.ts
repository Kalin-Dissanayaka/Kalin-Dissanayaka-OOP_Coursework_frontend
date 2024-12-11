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
startSimulation() {
throw new Error('Method not implemented.');
}
  customerForm: any;
totalTickets: any;
ticketReleaseRate: any;
customerRetrievalRate: any;
maximumTicketCapacity: any;
numberOfVendors: any;
numberOfCustomers: any;
availableTickets: any;
dueTickets: any;
ticketId: any;
eventName: any;
ticketPrice: any;
soldTickets: any;
Start: any;
Stop: any;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.initForm();
  }

  private initForm(): void {
    this.customerForm = this.fb.group({
      customerName: ['', Validators.required],
      customerRetrievalInterval: ['', [Validators.required, Validators.min(0)]],
      ticketQuantity: ['', [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit(): void {
    if (this.customerForm.valid) {
      const formValue = this.customerForm.value;
      
      // Create the request object matching your API structure
      const customerRequest = {
          // You might want to set this dynamically
        customerName: formValue.customerName,
        ticketQuantity: formValue.ticketQuantity,
        customerRetrievalRate: formValue.customerRetrievalInterval
      };

      this.apiService.addCustomer(customerRequest).subscribe({
        next: (response) => {
          console.log('Customer added successfully', response);
          this.customerForm.reset();
          // You can add success notification here
        },
        error: (error) => {
          console.error('Error adding customer:', error);
          // You can add error notification here
        }
      });
    }
  }
}