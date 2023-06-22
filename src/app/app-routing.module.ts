import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { NoFoundPageComponent } from './noFoundPage/no-found-page.component';
import { AuthRoutingModule } from './auth/auth-routing.module';

const routes: Routes = [

  //rutas protegidas
 //{path: 'login', component:LoginComponent},
 //{path: 'register', component:RegisterComponent},

 {path: '', redirectTo:'/dashboard/',pathMatch:'full'},
 {path: '**', component:NoFoundPageComponent},

];

@NgModule({
 imports: [
   RouterModule.forRoot(routes),
   PagesRoutingModule,
   AuthRoutingModule,
 ],
 exports: [
   RouterModule
 ]
})
export class AppRoutingModule { }
