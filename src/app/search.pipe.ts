import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';
import { Brands } from './brands';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  

  // transform(Brand:Brands[],BrandTerm:string): Brands[]{
  //   return Brand.filter((brand)=>brand.name.toLocaleLowerCase().includes(BrandTerm.toLocaleLowerCase()))

  // } 

  transform(products:Product[] ,searchTerm:string): Product[] {
    return products.filter((product)=>product.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }

 

}
