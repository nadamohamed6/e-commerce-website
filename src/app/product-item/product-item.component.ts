import { Component, Input } from '@angular/core';
import {Product} from '../product'
import { CartService } from 'src/core/services/cart.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  constructor(private _CartService:CartService){}

  addToCart(productId:string){
    this._CartService.addToCart(productId).subscribe({
      next:(res)=>{
        this._CartService.numOfCartItems.next(res.numberOfCartItems)
        console.log(res)},
      error:(err)=>console.log(err)
      

    })
  }
  @Input() product:Product ={} as Product

}
