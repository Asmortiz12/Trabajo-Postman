import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { ProductComponent } from './products/products.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CategoriesComponent,
    ProductComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    AppRoutingModule
  ],
  exports: [
    DashboardComponent,
    CategoriesComponent,
    ProductComponent 
  ]
})
export class PagesModule { }
