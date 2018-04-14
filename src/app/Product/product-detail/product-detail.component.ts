import { Component, OnInit } from '@angular/core';
import { HomePageViewRepository } from 'app/Shared/home-page-view-repository';
import { ActivatedRoute, Router,Params } from '@angular/router';
import {ProductDetailView  } from "app/models/product-Detail-View";
import { BaseProductCatalogPageView } from "app/Models/base-product-catalog-page-view";
import { ProductView } from "app/Models/product-view";
import { BasePageView } from "app/Models/base-page-view";
import { CategoryView } from "app/Models/category-view";
import { BasketSummaryView } from "app/Models/basket-summary-view";
import { ProductSizeOption  } from "app/Models/product-size-option";
import {ProductSummaryView  } from "app/Models/product-summary-view";
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
 public selectedProduct:ProductDetailView;
constructor(private repository:HomePageViewRepository,  private activatedRoute: ActivatedRoute ) {
  const productID=this.activatedRoute.snapshot.queryParams['Id'];
      this.selectedProduct=this.repository.getProductDetailView(productID);
      console.log(this.selectedProduct);
  }

  ngOnInit() {
      
  }
  public getImagePath(id:number) :string
  {
    return '/assets/Images/' + this.selectedProduct.Product.Id +'.jpg';
  }
  
 

}
