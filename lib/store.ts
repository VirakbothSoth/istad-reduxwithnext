import { configureStore } from "@reduxjs/toolkit";
import counter from "@/lib/features/counter/counterSlice";
import product from "@/lib/features/product/productSlice";
import { ecommerceApi } from "@/lib/features/api/ecommerceApi";

export const store = configureStore({
  reducer: {
    counter,
    product,
    [ecommerceApi.reducerPath]: ecommerceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ecommerceApi.middleware),
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;