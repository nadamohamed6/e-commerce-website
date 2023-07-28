import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/core/services/products.service';
import { Product } from '../product';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  productId:string=''
productDetails:Product={}as Product


constructor(private _activatedRoute:ActivatedRoute,private _ProductService:ProductsService){
    this._activatedRoute.paramMap.subscribe((res:any) =>{
      console.log(res.params.id);
      this.productId=res.params.id;
      
    })
    this._ProductService.getProductById(this.productId).subscribe({
      next:(res)=>{
        console.log(res.data);
        this.productDetails=res.data;
        
      }
    })
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }
  }




