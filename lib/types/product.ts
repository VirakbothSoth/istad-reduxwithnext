export type Product = {
    id: number;
    title: string;
    slug: string;
    price: number;
    description: string;
    images: string[];
}
// create product type

export type CreateProduct = {
    title: string;
    price: number;
    description: string;
    categoryId: number;
    images: string[];
}

//update product type 
export type UpdateProduct = {
    title: string;
    price: number;
    description: string;
    categoryId: number;
    images: string[];
}