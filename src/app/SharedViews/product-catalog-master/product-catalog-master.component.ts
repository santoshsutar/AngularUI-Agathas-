import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-catalog-master',
  templateUrl: './product-catalog-master.component.html',
  styleUrls: ['./product-catalog-master.component.css']
})
export class ProductCatalogMasterComponent implements OnInit {
  public pageName: string;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {


  }

  ngOnInit() {
    const productID = this.activatedRoute.snapshot.params['Id'];
    if (this.router.url == "/Basket/Detail") {
      this.pageName = "BasketDetail";
      return ;
    }
    if (this.router.url == "/") {
      this.pageName = "Home";
      return ;
    }
    if (productID == "" || productID == null) {
      this.pageName = "Home";
    }     
    else {
      this.pageName = "ProductDetail";
    }
  }

}
