import { DeliveryAddressView } from "./delivery-address-view";
import { OrderItemView } from "./order-item-view";

export class OrderView {
    public PaymentDatePaid: string;
    public PaymentTransactionId: string;
    public OrderHasBeenPaidFor: boolean;
    public Items: OrderItemView[];
    public Created: string;
    public ShippingCharge: string;
    public ShippingServiceCourierName: string;
    public ShippingServiceDescription: string;
    public Total: string;
    public Id: number;
    public DeliveryAddress: DeliveryAddressView;
    public CustomerFirstName: string;
    public CustomerSecondName: string;
}
