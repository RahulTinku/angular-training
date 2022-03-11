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
    //this.customers = customerService.getCustomerList();
  }

  ngOnInit(): void {
    this.reload();
  }
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
  deleteCustomer(id: any) {
    const deleteRecord = this.customers.filter((item) => id === item.id);
    this.customerService
      .deleteCustomerRest(deleteRecord[0], 'customer')
      .subscribe((res) => {
        this.reload();
      });
  }
  customerDetails(id: any) {
    this.user = this.customers.filter((item) => item.id === id)[0];
    this.selectCustomerId = this.user.id;
    this.btnLabel = 'Update User';
    this.details = this.user;
    this.route.navigate([`/editCustomer/${this.user.id}`]);
  }

  updateCustomer(customer: Customer) {
    console.log('customer id @parent ' + customer.id);
    console.log('new customer name is ' + customer.name);
    if (customer.id !== 0) {
      // this.customers.push(customer);
      this.customerService
        .updateCustomerRest(customer, 'customer')
        .subscribe((res) => {
          this.reload();
        });
    }
  }
  gotoCustomer() {
    this.route.navigate(['/addCustomer']);
  }
  reload() {
    this.customerService
      .getCustomerListRest('customer')
      .subscribe((res: Customer[]) => {
        this.customers = res;
        this.customerService.setCustomerCount(this.customers.length);
      });
  }
}
