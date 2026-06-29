import { configureStore } from "@reduxjs/toolkit"
import counter from "@/lib/features/counter/counterSlice";
import product from "@/lib/features/product/productSlice";
import { ecommerceApi } from "./api"

export const makeStore = () => {
    return configureStore({
        reducer: {
            counter,
            product,
            [ecommerceApi.reducerPath]: ecommerceApi.reducer
        },
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(ecommerceApi.middleware),
    })
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];