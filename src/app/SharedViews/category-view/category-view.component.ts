import { Component, OnInit } from '@angular/core';
import { HomePageView } from 'app/Models/home-page-view';
import { HomePageViewRepository } from 'app/Shared/home-page-view-repository';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent {

  constructor(private homePageViewRepository: HomePageViewRepository) {

  }
  public getCategories() {
    return this.homePageViewRepository.GetHomePageView().Categories;
  }



}
