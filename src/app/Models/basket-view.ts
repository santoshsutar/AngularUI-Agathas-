import { BasketItemView } from "./basket-item-view";

export class BasketView {
    /**
     *
     */
    constructor() {
        this.Items = [];

    }
    public Id: string;
    public ItemsTotal: string;
    public NumberOfItems: number;
    public Items: BasketItemView[];
    public BasketTotal: string;
    public DeliveryCost: string;
    public ShippingServiceDescription: string;
    public DeliveryOptionId: number;
}
