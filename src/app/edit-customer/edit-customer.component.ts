import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css'],
})
export class EditCustomerComponent implements OnInit {
  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.customerService
      .getCustomerRest(this.route.snapshot.params['id'], 'customer')
      .subscribe((res) => {
        this.details = res;
      });
  }

  details: Customer = new Customer();
  btnLabel = 'Update Customer';
  addUser() {
    //this.details.id = this.customerService.getCustomerCount() + 1;
    this.customerService
      .updateCustomerRest(this.details, 'customer')
      .subscribe((res) => {
        this.router.navigate(['/customers']);
      });
  }
  reset() {
    this.router.navigate(['/customers']);
  }
}
