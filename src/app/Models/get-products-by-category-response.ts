import { RefinementGroup } from "app/Models/refinement-group";
import { ProductSummaryView } from "app/Models/product-summary-view";

export class GetProductsByCategoryResponse {
    public  SelectedCategoryName :string
    public  SelectedCategory :number;

    public  RefinementGroups :RefinementGroup[];

    public  NumberOfTitlesFound :number;
    public  TotalNumberOfPages :number;
    public  CurrentPage :number;

    public  Products :ProductSummaryView[];
}
