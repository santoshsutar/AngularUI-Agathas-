import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-account-master',
  templateUrl: './customer-account-master.component.html',
  styleUrls: ['./customer-account-master.component.css']
})
export class CustomerAccountMasterComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  public requestedUrl: string;
  ngOnInit() {

    this.activatedRoute.url.subscribe(
      data => {      
        if (data[0].toString() == "Customer") {
          this.requestedUrl = "Customer"+data[1].toString();
          return;
        }
        if (data[0].toString() == "Order") {
          //console.log(data[1].toString());
          
          this.requestedUrl = data[1].toString();
          return;
        }
        
        this.requestedUrl = "";
        return;
      }
    );
  }

}
