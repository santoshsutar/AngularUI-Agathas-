import { ProductSummaryView } from "./product-summary-view";
import { BaseProductCatalogPageView } from "app/Models/base-product-catalog-page-view";

export class HomePageView  extends BaseProductCatalogPageView {
    public Products:ProductSummaryView[];
}
