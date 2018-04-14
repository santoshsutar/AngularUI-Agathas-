import { CustomerView } from "app/Models/customer-view";
import { BaseCustomerAccountView } from "app/Models/base-customer-account-view";

export class CustomerDetailView extends BaseCustomerAccountView {
    public Customer: CustomerView;
}
