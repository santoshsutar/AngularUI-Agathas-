import { BaseProductCatalogPageView } from "./base-product-catalog-page-view";
import { BasketView } from "./basket-view";
import { DeliveryOptionView } from "./delivery-option-view";

export class BasketDetailView extends BaseProductCatalogPageView {
    public Basket: BasketView;
    public DeliveryOptions: DeliveryOptionView[];
}
