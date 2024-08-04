import { NotFoundComponent } from './not-found/not-found.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ViewComponent } from './view/view.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {path:'', component: HomeComponent,title:'Home'},
    {path: 'register', component: RegisterComponent,title:'Register'},
    {path: 'login', component: LoginComponent,title:'Login'},
    {path: 'products', component: ProductsComponent,title:'Products'},
    {path: 'view/:id', component: ViewComponent},
    {path: '**', component:NotFoundComponent,title:'Page Not Found'},
];
