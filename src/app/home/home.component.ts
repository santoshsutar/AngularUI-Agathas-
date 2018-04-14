import { Component, OnInit } from '@angular/core';
import { HomePageViewRepository } from 'app/Shared/home-page-view-repository';
import { HomePageView } from '../Models/home-page-view';
import{ProductSummaryView } from '../Models/product-summary-view'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private homePageView:HomePageView;
  constructor(private router: Router,private homePageViewRepository:HomePageViewRepository ) { 
   this.homePageView=new HomePageView();
  }

  ngOnInit() {
  }
  public getHomePageViewProducts():HomePageView 
  {
    return this.homePageViewRepository.GetHomePageView();
  }
  
  
  public selectProduct(selectedProductSummaryView:ProductSummaryView)
  {
    this.router.navigate(['/ProductDetail'], { queryParams: { Id: selectedProductSummaryView.Id } });   
  }
}
