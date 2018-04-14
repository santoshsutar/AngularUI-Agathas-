import { CategoryView } from "app/Models/category-view";

export class ProductCatalogBaseComponent {
    /**
     * GetCategories
     */
    public GetCategories():CategoryView[] {
        let Categories :CategoryView[];
        Categories=[{id:1,name:'Cat1'}];
        return Categories;
    }
}
