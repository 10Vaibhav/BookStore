import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "../redux/features/Cart/CartSlice"
import booksApi from "./features/books/booksApi";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [booksApi.reducerPath]: booksApi.reducer,
    },
    middleware: (getDefaultMiddleware)=> {
        return getDefaultMiddleware().concat(booksApi.middleware);
    }
})
