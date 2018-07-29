import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterModule , Router } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { CustomFormsModule } from 'ng2-validation';
import { DataTableModule } from 'angular5-data-table';
import {NgPipesModule} from 'ngx-pipes';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { ProductFromComponent } from './admin/product-from/product-from.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ProductService } from '../services/product.service';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../services/auth-guard.service';
import { CartService } from '../services/cart.service';
import { ShippingService } from '../services/shipping.service';





@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFromComponent,
    ProductFilterComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    NgPipesModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: '' , component: ProductsComponent},
      {path: 'products' , component: ProductsComponent},
      {path: 'shopping-cart' , component: ShoppingCartComponent},
      {path: 'login' , component: LoginComponent},
 

      {path: 'check-out' , component: CheckOutComponent},
      {path: 'order-success' , component: OrderSuccessComponent},
      {path: 'my-orders' , component: MyOrdersComponent, canActivate : [AuthGuard]},

      
      {path: 'admin/products/new' , component: ProductFromComponent, canActivate : [AuthGuard]},
      {path: 'admin/products/:id' , component: ProductFromComponent, canActivate : [AuthGuard]},
      {path: 'admin/products' , component: AdminProductsComponent, canActivate : [AuthGuard]},
      {path: 'admin/orders' , component: AdminOrdersComponent, canActivate : [AuthGuard]},
    ])
  ],
  providers: [
    ProductService,
    AuthService,
    AuthGuard,
    CartService,
    ShippingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
