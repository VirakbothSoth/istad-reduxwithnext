import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type ProductType = {
    id: number;
    title: string;
    description: string;
    images: string[];
};

type ResponseType = {
    item: ProductType[];
    loading: boolean;
    error: string | null;
}

const initialState: ResponseType = {
    item: [],
    loading: false,
    error: null,
}

export const getProductData = createAsyncThunk("products/fetchProduct", async () => {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    return res.json() as Promise<ProductType[]>;
});

const productSlice = createSlice({
    name: "Product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProductData.pending, (s) => {
                s.loading = true;
                s.error = null;
            })
            .addCase(getProductData.fulfilled, (s, act) => {
                s.loading = false;
                s.item = act.payload;
            })
    }
})

export default productSlice.reducer;