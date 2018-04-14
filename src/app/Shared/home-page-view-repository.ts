import { Injectable } from '@angular/core';
import { HomePageView } from '../Models/home-page-view';
import { DataSourceService } from './data-source-service';
import { ProductDetailView } from 'app/Models/product-detail-view';
import { ProductSummaryView } from 'app/Models/product-summary-view';

@Injectable()
export class HomePageViewRepository {
    private homePageView: HomePageView=new HomePageView();
    private homePageViewProductSummaryView: ProductSummaryView[];
    constructor(private dataSource: DataSourceService) {
        this.dataSource.GetHomePageView().
        subscribe(data=>{           
            
            this.homePageView=data;
           // console.log(this.homePageView);
        });
        
    }
    public GetHomePageView() {
        return this.homePageView;
    }
    
    public getProductDetailView(id: number): ProductDetailView 
    {
        return new ProductDetailView();

    }
}

