import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../action/index";

export const Store = configureStore({
    reducer: {
        product: CartSlice
    }
})