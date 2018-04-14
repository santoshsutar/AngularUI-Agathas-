import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductDetailView } from "app/models/product-Detail-View";
import { BaseProductCatalogPageView } from "app/Models/base-product-catalog-page-view";
import { ProductView } from "app/Models/product-view";
import { BasePageView } from "app/Models/base-page-view";
import { CategoryView } from "app/Models/category-view";
import { BasketSummaryView } from "app/Models/basket-summary-view";
import { ProductSizeOption } from "app/Models/product-size-option";
import { ProductSummaryView } from "app/Models/product-summary-view";
import { ProductRepositoryService } from 'app/Shared/product-repository.service';

import { CurrentBasketService } from 'app/Shared/current-basket.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private selectedProduct: ProductDetailView;
  private productViewId: string;
  constructor(private repository: ProductRepositoryService,
    private activatedRoute: ActivatedRoute,
     private currentBasketService: CurrentBasketService) {
    const productID = this.activatedRoute.snapshot.params['Id'];

    this.productViewId = this.activatedRoute.snapshot.params['Id'];
    //console.log(this.selectedProduct.Product.Price);

    // console.log(this.selectedProduct);
  }

  ngOnInit() {
    const productID = this.activatedRoute.snapshot.params['Id'];
    this.repository.getProductDetailView(productID).subscribe(
      data => {
        this.selectedProduct = data;
        this.currentBasketService.basketSummaryView = data.BasketSummary;
      }
    );
  }
  public getImagePath(id: number): string {
    return '/assets/Images/' + this.selectedProduct.Product.Id + '.jpg';
  }
  public addProductToBasket() {
    this.repository.addProductToBasket(this.selectedProduct.Product.Id)
      .subscribe(data => {
        this.currentBasketService.basketSummaryView = data;
      });

  }

}
