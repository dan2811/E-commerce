import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct:(state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        removeProduct:(state, action) => {
            // state.quantity -= 1;
            // Find object(product) in array by its id,
            const idx = action.payload;
            
            state.total -= (state.products[idx].price * state.products[idx].quantity);
            console.log(state.total);
            state.products.splice(idx, 1);
            state.quantity -= 1;
            
            // then find the price of the product and the quantity and mulitply together
            // then take away from cart total(state.total). 
            // state.total -= targetProduct.price * targetProduct.quantity;
            // Then filter the array to remove the desired product.
            // state.products.splice(targetProductIndex, 1);
        },
    },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
