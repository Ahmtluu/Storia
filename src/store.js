import { configureStore } from "@reduxjs/toolkit";
import { storeApiSlice } from "./features/products/product-api-slice";

export const store = configureStore({
  reducer: {
    [storeApiSlice.reducerPath]: storeApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(storeApiSlice.middleware);
  },
});
