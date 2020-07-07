import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
//  templateUrl: './product-list-table.component.html',
 // templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  currentCategoryId: number;

  constructor( private productService: ProductService,
    private route: ActivatedRoute) { }

        //Similar to PostConstruct method of SpringBoot ngOnInit()
  ngOnInit(): void {
    this.route.paramMap.subscribe(()=> {
    this.listProducts();
    });
  }

  listProducts(){
    //Check if id parameter is avaialble 
    const hasCategoryId : boolean = this.route.snapshot.paramMap.has('id');

    if(hasCategoryId){
      // get the "id" param string and convert to a number using the + symbol
      this.currentCategoryId = + this.route.snapshot.paramMap.get('id');
    }
    else
    {
      this.currentCategoryId = 1;
    }
    this.productService.getProductList(this.currentCategoryId).subscribe(
      data=> {this.products = data;}
    );
  }

}
