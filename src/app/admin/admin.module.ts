import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageOrdersComponent } from './components/manage-orders/manage-orders.component';
import { ManageCategoriesComponent } from './components/manage-categories/manage-categories.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ManageCategoriesComponent, ManageOrdersComponent, ManageUsersComponent, DashboardComponent ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
