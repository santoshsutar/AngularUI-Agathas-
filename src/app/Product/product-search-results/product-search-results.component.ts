import { Component, OnInit } from '@angular/core';   
import { ProductCatalogBaseComponent } from 'app/Shared/product-catalog-base-component'
import { RefinementGroup } from "app/Models/refinement-group";
import { ProductSummaryView } from "app/Models/product-summary-view";
import { ProductSearchResultView } from "app/Models/product-search-result-view";
import { GetProductsByCategoryRequest } from "app/Models/get-products-by-category-request";
import { ProductsSortBy } from "app/Models/products-sort-by.enum";
import { GetProductsByCategoryResponse } from "app/Models/get-products-by-category-response";
import { ProductRepositoryService } from 'app/Shared/product-repository.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CurrentBasketService } from '../../Shared/current-basket.service';

@Component({
  selector: 'app-product-search-results',
  templateUrl: './product-search-results.component.html',
  styleUrls: ['./product-search-results.component.css']
})
export class ProductSearchResultsComponent extends ProductCatalogBaseComponent
  implements OnInit {

  private productSearchResultView: ProductSearchResultView;
  constructor(private productRepositoryService: ProductRepositoryService, 
    private activatedRoute: ActivatedRoute, 
     private currentBasketService: CurrentBasketService) {
    super();
  
    }
  public ngOnInit() {
    const categoryId = this.activatedRoute.snapshot.params['categoryId'];
   
     this.productRepositoryService.getProductSearchResultView(categoryId)
     .subscribe(
       data=>{
         this.productSearchResultView=data;
         this.currentBasketService.basketSummaryView=data.BasketSummary;
       }
     );
 
  }
 
}
