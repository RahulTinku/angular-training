import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
})
export class CustomerFormComponent implements OnInit, OnChanges {
  constructor() {}
  @Input() selectId: number = 0;
  @Input() details: Customer = new Customer();
  @Output() doUpdate = new EventEmitter<Customer>();
  btnLabel = 'Add User';
  // user: Customer = new Customer();

  ngOnInit(): void {
    // console.log(this.user);
  }
  ngOnChanges() {
    this.btnLabel = this.details.id === 0 ? 'Add User' : 'Update User';
  }
  updateRequested(name: string) {
    var customer: Customer = new Customer();
    customer.name = name;
    customer.id = this.selectId;
    this.doUpdate.emit(customer);
  }

  addUser() {
    if (this.details.id === 0) {
      this.doUpdate.emit(this.details);
    }
    this.reset();
  }
  reset() {
    this.btnLabel = 'Add User';
    this.details = { id: 0, name: '', email: '', address: '', phone: '' };
  }
}
