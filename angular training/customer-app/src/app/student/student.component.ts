import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  constructor() {}
  btnLabel = 'Add Student';
  student = {
    id: 0,
    name: '',
    email: '',
    address: '',
    phone: '',
    city: '',
  };
  students: any = [];

  ngOnInit(): void {}

  deleteStudent(id: any) {
    this.students = this.students.filter((item: any) => item.id !== id);
  }
  stidentDetails(id: any) {
    this.student = this.students.filter((item: any) => item.id === id)[0];
    this.btnLabel = 'Update Student';
  }
  add() {
    if (this.student.id === 0) {
      this.student.id = this.students.length + 1;
      this.students.push(this.student);
    }
    console.log(this.students);
    this.clear();
  }
  clear() {
    this.btnLabel = 'Add Student';
    this.student = {
      id: 0,
      name: '',
      email: '',
      address: '',
      phone: '',
      city: '',
    };
  }
}
