import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/core/services/products.service';
import { Product } from '../product';
@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {
  searchTerm:string=''
  constructor(private _ProductsService:ProductsService){}
allProduct:Product[]=[]
  ngOnInit(): void {
    this.getAllProducts();
    
  }

  getAllProducts(){
    this._ProductsService.getProducts().subscribe({
      next:(res)=>{
        this.allProduct=res.data;

      }
    })
  }
}
