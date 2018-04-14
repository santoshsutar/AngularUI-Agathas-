import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {DataSourceService} from './Shared/data-source-service';
import { HomePageViewRepository } from './Shared/home-page-view-repository';
import { RouterModule,Routes } from "@angular/router";    
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductSearchResultsComponent } from './product/product-search-results/product-search-results.component';
import { ProductCatalogMasterComponent } from './SharedViews/product-catalog-master/product-catalog-master.component';
import { CategoryViewComponent } from './SharedViews/category-view/category-view.component';
const routes: Routes = [
  { path: 'Product/GetProductsByCategory', component:ProductSearchResultsComponent   },
  { path: 'ProductDetail',  component:ProductDetailComponent   },
  {path:'**',component:HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailComponent,
    ProductSearchResultsComponent,
    ProductCatalogMasterComponent,
    CategoryViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataSourceService,HomePageViewRepository],
  bootstrap: [AppComponent,CategoryViewComponent]
})
export class AppModule { }
