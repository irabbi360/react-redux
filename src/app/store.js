import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "../features/counters/countersSlice.js"

const store = configureStore({
    reducer: {
        counters: countersReducer
    }
});

export default store;