import { Component, OnInit } from '@angular/core';
import { BasketSummaryView } from 'app/Models/basket-summary-view';
import { CurrentBasketService } from 'app/Shared/current-basket.service';
@Component({
  selector: 'app-basket-summary-view',
  templateUrl: './basket-summary-view.component.html',
  styleUrls: ['./basket-summary-view.component.css']
})
export class BasketSummaryViewComponent {

  constructor(private currentBasketService: CurrentBasketService) {
  
        
    }
    public get1BasketSummaryView():BasketSummaryView
    {
      return this.currentBasketService.basketSummaryView;
    }
  }
