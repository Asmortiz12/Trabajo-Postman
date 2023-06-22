import { CategoryModel } from "./category.model";

 export interface ProductModel{
    id:number;
    title:string;
    description:string;
    price:number;
    category:CategoryModel;
    images:string[];
}
 export interface CreateProductDto extends Omit <ProductModel, 'id'| 'category'>{
    categoryId:number;
}
export interface UpdateProductDto extends Partial<ProductModel>{
     categoryId?:number;
}