import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod, Headers, Response, Jsonp, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import { HomePageView } from 'app/Models/home-page-view';
import { ProductSummaryView } from 'app/Models/product-summary-view';


const PROTOCOL = "http";
const PORT = 13980;
@Injectable()
export class DataSourceService {

  baseUrl: string;
  constructor(private http: Http, private jsonp: Jsonp) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }
  public GetHomePageView(): Observable<HomePageView> {
    return this.sendRequest(RequestMethod.Get, "api/home/index") as Observable<HomePageView>;

  }  
  private sendRequest(verb: RequestMethod,
    url: string, body?: HomePageView| null): Observable<HomePageView>  {
    let headers = new Headers();
    headers.set("Content-Type", "application/x-www-form-urlencoded");
    //headers.set("charset", "UTF-8");
    console.log(body);
    return this.http.request(new Request({
      method: verb,
      url: this.baseUrl + url,
      body: body,
      headers: headers
    })).map(response => {
      console.log(response.status);
      return response.json();
    });
  }

}

