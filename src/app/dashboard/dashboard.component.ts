import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerService } from '../customer.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private customerService: CustomerService,
    private store: Store<{ count: number }>
  ) {
    this.numOfCust = customerService.getCustomerCount();
    this.count$ = store.select('count');
  }
  numOfCust;
  count$: Observable<number>;
  ngOnInit(): void {}
}
