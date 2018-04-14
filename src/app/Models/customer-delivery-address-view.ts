import { BaseCustomerAccountView } from "app/Models/base-customer-account-view";
import { DeliveryAddressView } from "app/Models/delivery-address-view";
import { CustomerView } from "app/Models/customer-view";

export class CustomerDeliveryAddressView extends BaseCustomerAccountView {
    public CustomerView: CustomerView;
    public Address: DeliveryAddressView;
}
