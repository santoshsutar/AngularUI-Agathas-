import { Component, OnInit } from '@angular/core';
import { HomePageViewRepository } from 'app/Shared/home-page-view-repository';
import { HomePageView } from '../Models/home-page-view';
import { ProductSummaryView } from '../Models/product-summary-view'
import { CurrentBasketService } from '../Shared/current-basket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private homePageView: HomePageView;
  constructor(private homePageViewRepository: HomePageViewRepository,
    private currentBasketService: CurrentBasketService) {
    this.homePageView = new HomePageView();
  }
  public getHomePageViewProducts(): HomePageView {
   let home= this.homePageViewRepository.GetHomePageView();  
   this.currentBasketService.basketSummaryView=home.BasketSummary;
   return home;
  }
}
