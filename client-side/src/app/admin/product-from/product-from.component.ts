import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-from',
  templateUrl: './product-from.component.html',
  styleUrls: ['./product-from.component.css']
})
export class ProductFromComponent{

  id; 
  product = {};
  constructor(private productService:ProductService , private router:Router , private route:ActivatedRoute) 
  { 

   this.id = this.route.snapshot.paramMap.get('id');

   if(this.id)
    { 
      productService.getAProduct(this.id).subscribe(res=> {
        this.product=res[0];
      });
    }

  }
  createProduct(data)
  {
   if(this.id) this.productService.updateProduct(this.id , data).subscribe();
    else this.productService.createProduct(data).subscribe();
    this.router.navigate(['/admin/products']);
  }

  deleteProduct(){
    if(!confirm('Are you sure you want to delete this product?')) return;
     
    this.productService.deleteProduct(this.id).subscribe();
    this.router.navigate(['/admin/products']);
    
  }
  
  }

  
