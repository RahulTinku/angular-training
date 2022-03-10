import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor() {}

  // constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:3000/api/v1/customer';

  customers: Customer[] = [
    {
      id: 1,
      name: 'Vivek',
      email: 'vivek@abc.com',
      phone: '2356422433',
      address: 'India',
    },
    {
      id: 2,
      name: 'Pratistha',
      email: 'pari@abc.com',
      phone: '28896422433',
      address: 'India',
    },
    {
      id: 3,
      name: 'Samridh',
      email: 'samar@abc.com',
      phone: '2889rr22433',
      address: 'India',
    },
    {
      id: 4,
      name: 'Vishal',
      email: 'vishal@abc.com',
      phone: '28899822433',
      address: 'India',
    },
  ];

  getCustomer(id: number): Customer {
    return this.customers[0];
  }

  getCustomerList(): Customer[] {
    return this.customers;
  }
  setCustomer(customer: Customer[]) {
    this.customers = customer;
  }
}
