import { DeliveryAddressView } from "app/Models/delivery-address-view";

export class CustomerView {
    public IdentityToken: string;
    public FirstName: string;
    public SecondName: string;
    public Email: string;
    public DeliveryAddressBook: DeliveryAddressView[];
}
