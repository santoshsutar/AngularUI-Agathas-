import { OrderSummaryView } from "./order-summary-view";
import { BaseCustomerAccountView } from "./base-customer-account-view";

export class CustomersOrderSummaryView extends BaseCustomerAccountView {
    public Orders: OrderSummaryView[];
}
