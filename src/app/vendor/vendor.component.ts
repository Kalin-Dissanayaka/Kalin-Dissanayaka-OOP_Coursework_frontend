import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css'],
})
export class VendorFormComponent implements OnInit {
  vendorForm!: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService,private router: Router) {}

  ngOnInit() {
    this.vendorForm = this.fb.group({
      totalTickets: [0, [Validators.required, Validators.min(1)]],
      releaseRate: [0, [Validators.required, Validators.min(1)]],
      retrievalRate: [0, [Validators.required, Validators.min(1)]],
      maxCapacity: [0, [Validators.required, Validators.min(1)]],
      numVendors: [0, [Validators.required, Validators.min(1)]],
      numCustomers: [0, [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit(): void {
    if (this.vendorForm.valid) {
      console.log('Form Submission:', this.vendorForm.value);
      this.apiService.saveConfig(this.vendorForm.value).subscribe({
        next: (response: any) => {
          console.log('Configuration saved:', response);
          this.router.navigateByUrl('/customer');
        },
        error: (error: any) => {
          console.error('Error saving configuration:', error);
          alert("Error saving configuration");
        },
      });
    }
  }
}
