import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import 'rxjs/add/operator/switchMap';
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  totalProducts: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;

  
  constructor(private productService:ProductService , route:ActivatedRoute) 
  {
    this.productService.getProducts()
    .switchMap(products=>{
      this.totalProducts = products;
      return route.queryParamMap
    })
      .subscribe(params => {
        this.category = params.get('category');
        this.filteredProducts = (this.category) ?
        this.totalProducts.filter(p => p.category === this.category) :
        this.totalProducts; 
      })
  }

}
