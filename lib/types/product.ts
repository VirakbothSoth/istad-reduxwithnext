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