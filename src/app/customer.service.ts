import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  // constructor(private http: HttpClient) { }
  private baseUrl = 'https://nodeapi.pyther.com/customer';

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
  count: number = 0;

  getCustomer(id: number): Customer {
    return this.customers[0];
  }

  getCustomerList(): Customer[] {
    return this.customers;
  }
  setCustomer(customer: Customer[]) {
    this.customers = customer;
  }
  getCustomerCount() {
    return this.count;
  }
  setCustomerCount(num: number) {
    this.count = num;
  }
  addCustomer(customer: Customer) {
    this.customers.push(customer);
  }

  getCustomerRest(id: number): Observable<any> {
    // check http://localhost:3000/api/customer/2
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCustomerRest(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, customer);
  }

  updateCustomerRest(customer: Object): Observable<Object> {
    console.log('updateCustomerRest');
    return this.http.put(`${this.baseUrl}`, customer);
  }

  deleteCustomerRest(customer: any): Observable<any> {
    console.log(customer);
    return this.http.delete(`${this.baseUrl}/${customer.id}`);
  }

  getCustomerListRest(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
