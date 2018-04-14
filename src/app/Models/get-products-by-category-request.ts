import { ProductsSortBy } from "app/Models/products-sort-by.enum";
export class GetProductsByCategoryRequest {
    public CategoryId: number;
    public ColorIds: number[];
    public BrandIds: number[];
    public SizeIds: number[];
    public SortBy: ProductsSortBy;
    public Index: number;
    public NumberOfResultsPerPage: number;
}
