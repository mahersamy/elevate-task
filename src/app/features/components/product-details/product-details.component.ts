import { Product } from '../../interfaces/product';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-product-details',
  imports: [NgxSpinnerModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  
  private readonly _productService=inject(ProductService);
  private readonly _activatedRoute=inject(ActivatedRoute);
  private readonly _ngxSpinnerService=inject(NgxSpinnerService);
  
  
  productId: string | null = null;
  product!:Product;
  ngOnInit(): void {
    this.productId = this._activatedRoute.snapshot.paramMap.get('id');
    this.getProductDetail(this.productId!);
  }


  getProductDetail(id:string):void{
    this._ngxSpinnerService.show();

    this._productService.getProductById(id).subscribe(
      {
        next:(res)=>{
          this.product=res;
        },
        error:(error)=>{},
        complete:()=>{
          setTimeout(() => {
            this._ngxSpinnerService.hide();
          }, 500);
          
        }
      }
    )
  }



}
