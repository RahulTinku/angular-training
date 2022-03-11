import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { Student } from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  constructor(
    private customerService: CustomerService,
    private route: Router
  ) {}
  btnLabel = 'Add Student';
  student = new Student();
  students: any = [];

  ngOnInit(): void {
    this.reload();
  }

  deleteStudent(id: any) {
    const deleteRecord = this.students.filter((item: any) => id === item.id);
    this.customerService
      .deleteCustomerRest(deleteRecord[0], 'api/student')
      .subscribe((res) => {
        this.reload();
      });
  }
  stidentDetails(id: any) {
    this.student = this.students.filter((item: any) => item.id === id)[0];
    this.btnLabel = 'Update Student';
    this.route.navigate(['/editstudent', this.student.id]);
  }
  add() {
    if (this.student.id === '') {
      this.student.id = this.students.length + 1;
      this.students.push(this.student);
    }
    console.log(this.students);
    this.clear();
  }
  clear() {
    this.btnLabel = 'Add Student';
    this.student = new Student();
    this.route.navigate(['/']);
  }
  gotoCustomer() {
    this.route.navigate(['/editstudent', 0]);
  }
  reload() {
    this.customerService
      .getCustomerListRest('api/student')
      .subscribe((res: Student[]) => {
        this.students = res;
        this.customerService.setCustomerCount(this.students.length);
      });
  }
}
