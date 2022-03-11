import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from '../student';

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.css'],
})
export class AddEditStudentComponent implements OnInit {
  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.studedentId = this.route.snapshot.params['id'];
    if (this.studedentId === '0') {
      this.details = new Student();
      this.btnLabel = 'Add Student';
    } else {
      this.customerService
        .getCustomerRest(this.studedentId, 'api/student')
        .subscribe((res) => {
          this.details = res;
          this.sub1 = this.details.subjects[0];
          this.sub2 = this.details.subjects[1];
          this.sub3 = this.details.subjects[2];
        });
      this.btnLabel = 'Update Student';
    }
  }
  details: Student = new Student();
  btnLabel = 'Add Student';
  studedentId: any;
  sub1: any;
  sub2: any;
  sub3: any;

  addUser() {
    //this.details.id = this.customerService.getCustomerCount() + 1;
    if (this.studedentId === '0') {
      this.details.subjects = [this.sub1, this.sub2, this.sub3];
      this.customerService
        .createCustomerRest(this.details, 'api/student')
        .subscribe((res) => {
          this.router.navigate(['/student']);
        });
    } else {
      this.customerService
        .updateCustomerRest(this.details, 'api/student')
        .subscribe((res) => {
          this.router.navigate(['/student']);
        });
    }
  }
  reset() {
    this.details = new Student();
    this.router.navigate(['/student']);
  }
  addSubject() {
    this.details.subjects.push('');
  }
}
