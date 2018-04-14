import { ProductSizeOption } from "app/Models/product-size-option";

export class ProductView {
    public Id: number;
    public BrandName: string;
    public Name: string;
    public Price: string;
    public Products: ProductSizeOption[];
}
