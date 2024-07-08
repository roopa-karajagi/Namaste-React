import CartSlice from "../../modules/cartSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer:{
        cart: CartSlice
    }
});

export default store;