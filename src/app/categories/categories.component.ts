import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/core/services/products.service';
import { Categorie } from '../categorie';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  constructor(private _productService:ProductsService){}


allCatagories:Categorie[] =[]

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(){
    this._productService.getCategories().subscribe({
      next:(res)=>{
       
        this.allCatagories=res.data
        console.log(this.allCatagories);
        
        
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
        items: 7
      }
    },
    nav: true
  }

}
