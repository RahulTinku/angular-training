import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CustomersComponent } from './customers/customers.component';
import { MenuComponent } from './menu/menu.component';
import { StudentComponent } from './student/student.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { AddEditStudentComponent } from './add-edit-student/add-edit-student.component';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AboutusComponent,
    CustomersComponent,
    MenuComponent,
    StudentComponent,
    CustomerFormComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    AddEditStudentComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ count: counterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
