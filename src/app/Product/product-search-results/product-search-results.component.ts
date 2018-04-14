import { Component } from '@angular/core';
import { ProductCatalogBaseComponent } from 'app/Shared/product-catalog-base-component'
import { RefinementGroup } from "app/Models/refinement-group";
import { ProductSummaryView } from "app/Models/product-summary-view";
import { ProductSearchResultView } from "app/Models/product-search-result-view";
import { GetProductsByCategoryRequest } from "app/Models/get-products-by-category-request";
import { ProductsSortBy } from "app/Models/products-sort-by.enum";
import { GetProductsByCategoryResponse } from "app/Models/get-products-by-category-response";

@Component({
  selector: 'app-product-search-results',
  templateUrl: './product-search-results.component.html',
  styleUrls: ['./product-search-results.component.css']
})
export class ProductSearchResultsComponent extends ProductCatalogBaseComponent {

  public productSearchResultView: ProductSearchResultView;
  constructor() {
    super();
    //let response=this.GenerateInitialProductSearchRequestFrom(1);
    let response=new GetProductsByCategoryResponse();
    this.productSearchResultView=this.GetProductSearchResultViewFrom(response);

  }


  private GenerateInitialProductSearchRequestFrom(categoryId: number) {

    let getProductsByCategoryRequest: GetProductsByCategoryRequest = new GetProductsByCategoryRequest();
    getProductsByCategoryRequest.NumberOfResultsPerPage = 4;
    getProductsByCategoryRequest.CategoryId = categoryId;
    getProductsByCategoryRequest.Index = 1;
    getProductsByCategoryRequest.SortBy = ProductsSortBy.PriceHighToLow;
    return getProductsByCategoryRequest;
  }
  private GetProductSearchResultViewFrom(response: GetProductsByCategoryResponse) {

    let productSearchResultView: ProductSearchResultView = new ProductSearchResultView();
    //productSearchResultView.BasketSummary = base.GetBasketSummaryView();
    productSearchResultView.Categories = super.GetCategories();
    productSearchResultView.CurrentPage = response.CurrentPage;
    productSearchResultView.NumberOfTitlesFound = response.NumberOfTitlesFound;
    productSearchResultView.Products = response.Products;
    productSearchResultView.RefinementGroups = response.RefinementGroups;
    productSearchResultView.SelectedCategory = response.SelectedCategory;
    productSearchResultView.SelectedCategoryName = response.SelectedCategoryName;
    productSearchResultView.TotalNumberOfPages = response.TotalNumberOfPages;
    return productSearchResultView;
  }

  
}
