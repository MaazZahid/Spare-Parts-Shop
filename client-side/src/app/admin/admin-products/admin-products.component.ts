import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Subscription } from 'rxjs';
import { DataTableResource } from 'angular5-data-table';
import { Product } from '../../../models/product.model';


@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit , OnDestroy {

  products: Product[];
  subscription :Subscription;
  tableResource: DataTableResource<Product>;
  items: Product[] = [];
  itemCount: number;

  constructor(private productService:ProductService) 
  {
  
  this.subscription = this.productService.getProducts()
  .subscribe(products => {
    this.products = products;
    this.initializeTable(products);
  });
  }

  private initializeTable(products: Product[]){
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({ offset:0 })
    .then(items => this.items = items);
    this.tableResource.count()
    .then(count => this.itemCount = count);
  }

  reloadItems(prams){
    if(!this.tableResource) return;

    this.tableResource.query(prams)
    .then(items => this.items = items);
  }

  filter(query: string){
    let filteredProducts = (query) ? 
    this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
    this.products;

    this.initializeTable(filteredProducts);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe(); 
  }

  ngOnInit() {
  }

}
