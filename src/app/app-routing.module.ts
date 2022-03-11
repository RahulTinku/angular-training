import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CustomersComponent } from './customers/customers.component';
import { MenuComponent } from './menu/menu.component';
import { StudentComponent } from './student/student.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { AddEditStudentComponent } from './add-edit-student/add-edit-student.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'student', component: StudentComponent },
  { path: 'addCustomer', component: AddCustomerComponent },
  { path: 'editCustomer/:id', component: EditCustomerComponent },
  { path: 'editstudent/:id', component: AddEditStudentComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
