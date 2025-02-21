import { Product } from '../../interfaces/product';
import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { RouterLink } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  imports: [RouterLink, NgxSpinnerModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

 private readonly _productService=inject(ProductService);
 private readonly _ngxSpinnerService=inject(NgxSpinnerService);

 products:Product[]=[] as Product[];
 ngOnInit(): void {
  this.getAllProduct();

  }


  getAllProduct(){
    this._ngxSpinnerService.show();
    this._productService.getAllProducts().subscribe(
      {

        next:(res)=>{

        
          this.products=res;
        

        },
        error:(error)=>{

        },
        complete:()=>{
          setTimeout(() => {
            this._ngxSpinnerService.hide();
          }, 500);
          
        }


      }
    )
  }
}
