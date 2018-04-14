import { RefinementGroup } from "app/Models/refinement-group";
import { ProductSummaryView } from "app/Models/product-summary-view";
import { BaseProductCatalogPageView } from "app/Models/base-product-catalog-page-view";

export class ProductSearchResultView extends BaseProductCatalogPageView {    
    public  SelectedCategoryName:string;
    public  SelectedCategory :number;
    public RefinementGroups :RefinementGroup[];
    public  NumberOfTitlesFound :number;
    public  TotalNumberOfPages :number;
    public  CurrentPage :number;
    public  Products : ProductSummaryView[];
}
