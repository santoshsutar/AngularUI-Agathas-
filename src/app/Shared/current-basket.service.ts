import { Injectable } from '@angular/core';
import { BasketSummaryView } from '../Models/basket-summary-view';
import { ProductRepositoryService } from 'app/Shared/product-repository.service';

@Injectable()
export class CurrentBasketService {
public basketSummaryView:BasketSummaryView;
  constructor(private repository: ProductRepositoryService) { 
    //this.repository.
  }
  

}
