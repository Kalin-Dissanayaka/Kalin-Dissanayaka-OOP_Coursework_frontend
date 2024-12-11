import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import components
import { HomeComponent } from './home/home.component';
import { VendorFormComponent } from './vendor/vendor.component';
import { CustomerFormComponent } from './customer/customer.component';


export const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  {path: 'vendor', component: VendorFormComponent},
 { path: 'vendor-form', component: VendorFormComponent },
{ path: 'customer-form', component: CustomerFormComponent },
  {path: 'customer', component: CustomerFormComponent}
  // Add other routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
