import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  constructor(private customerService: CustomerService, private route: Router) {
    this.customers = customerService.getCustomerList();
  }

  ngOnInit(): void {}
  selectCustomerId = 0;
  btnLabel = 'Add User';
  details: Customer = new Customer();
  customers: Customer[] = [];
  user = {
    id: 0,
    name: '',
    email: '',
    address: '',
    phone: '',
  };
  // customers = [
  //   {
  //     id: 1,
  //     name: 'Vivek',
  //     email: 'vivek@abc.com',
  //     phone: '2356422433',
  //     address: 'India',
  //   },
  //   {
  //     id: 2,
  //     name: 'Pratistha',
  //     email: 'pari@abc.com',
  //     phone: '28896422433',
  //     address: 'India',
  //   },
  //   {
  //     id: 3,
  //     name: 'Samridh',
  //     email: 'samar@abc.com',
  //     phone: '2889rr22433',
  //     address: 'India',
  //   },
  //   {
  //     id: 4,
  //     name: 'Vishal',
  //     email: 'vishal@abc.com',
  //     phone: '28899822433',
  //     address: 'India',
  //   },
  // ];
  deleteCustomer(id: any) {
    this.customers = this.customers.filter((item) => id !== item.id);
    this.customerService.setCustomer(this.customers);
  }
  customerDetails(id: any) {
    this.user = this.customers.filter((item) => item.id === id)[0];
    this.selectCustomerId = this.user.id;
    this.btnLabel = 'Update User';
    this.details = this.user;
  }

  updateCustomer(customer: Customer) {
    console.log('customer id @parent ' + customer.id);
    console.log('new customer name is ' + customer.name);
    customer.id = this.customers.length + 1;
    this.customers.push(customer);
    this.customerService.setCustomer(this.customers);
    //this.router.navigate(['/add-customer']);
  }
}
