import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  constructor(
    private customerService: CustomerService,
    private route: Router
  ) {}
  details: Customer = new Customer();
  btnLabel = 'Add Customer';
  ngOnInit(): void {}
  addUser() {
    //this.details.id = this.customerService.getCustomerCount() + 1;
    this.customerService
      .createCustomerRest(this.details, 'customer')
      .subscribe((res) => {
        this.route.navigate(['/customers']);
      });
  }
  reset() {
    this.details = new Customer();
    this.route.navigate(['/customers']);
  }
}
