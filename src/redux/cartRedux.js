import {
    createSlice
} from "@reduxjs/toolkit";
import { useDispatch as dispatch } from "react-redux";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += action.payload.quantity;
            state.total += action.payload.price * action.payload.quantity;
            const indexOfExistingProduct = state.products.findIndex(product => product._id === action.payload._id);
            console.log(action.payload.color);
            if (
                indexOfExistingProduct >= 0 &&
                action.payload.color === state.products[indexOfExistingProduct].color &&
                action.payload.size === state.products[indexOfExistingProduct].size
            ) {
                state.products[indexOfExistingProduct].quantity += action.payload.quantity;
                console.log(state.products[indexOfExistingProduct].quantity);
                return;
            }
            state.products.push(action.payload);
        },
        removeProduct: (state, action) => {
            const idx = action.payload;
            state.total -= (state.products[idx].price * state.products[idx].quantity);
            state.quantity -= state.products[idx].quantity;
            state.products.splice(idx, 1);
        },
        incrementQuantity: (state, action) => {
            state.products[action.payload].quantity += 1;
            state.quantity += 1;
            state.total += parseInt(state.products[action.payload].price);
        },
        decrementQuantity: (state, action) => {
            const currentProduct = state.products[action.payload];
            currentProduct.quantity -= 1;
            state.quantity -= 1;
            state.total -= parseInt(currentProduct.price);
        },
    },
});

export const {
    addProduct,
    removeProduct,
    incrementQuantity,
    decrementQuantity
} = cartSlice.actions;
export default cartSlice.reducer;