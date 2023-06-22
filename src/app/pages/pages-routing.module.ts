import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { NoFoundPageComponent } from '../noFoundPage/no-found-page.component';

const routes: Routes = [
  {
    path: 'dashboard', component: PagesComponent, children: [
      { path: '', component: DashboardComponent },
      { path: 'product', component: ProductComponent },
      { path: 'category', component: CategoriesComponent },
      { path:'', redirectTo:'/dashboard', pathMatch:'full'},
      {path:'**', component: NoFoundPageComponent},
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class PagesRoutingModule { }
