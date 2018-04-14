import { CategoryView } from "app/Models/category-view";

export class ProductCatalogBaseComponent {
    /**
     * GetCategories
     */
    public GetCategories():CategoryView[] {
        let Categories :CategoryView[];
        Categories=[{Id:1,Name:'Cat1'}];
        return Categories;
    }
}
