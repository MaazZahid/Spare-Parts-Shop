import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../../services/product.service';


@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent {
  
  categories;
  @Input('category') category;
  constructor(private productService:ProductService) 
  { 
    this.categories = this.productService.getCategories();
  }

  
}
