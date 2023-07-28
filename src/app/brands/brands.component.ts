import { Component, OnInit } from '@angular/core';
import { BrandsService } from 'src/core/services/brands.service';
import { Brands } from '../brands';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  BrandTerm:string=''
  constructor(private _BrandsService:BrandsService){}

  getBrands:Brands[]=[]

ngOnInit(): void {
  this.getAllBrands()

}

  getAllBrands(){
    this._BrandsService.getAllBrands().subscribe({
      next:(res)=>{
this.getBrands=res.data;
console.log(this.getBrands);
        
      }
    })
  }


  

}
