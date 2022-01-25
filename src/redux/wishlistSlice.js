import {
    createSlice
} from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        products: [],
    },
    reducers: {
        addProductToWishlist: (state, action) => {
            state.products.push(action.payload);
        },
        removeProductToWishlist: (state, action) => {
            state.splice(action.payload, 1);
        },
    },
});

export const {
    addProductToWishlist,
    removeProductToWishlist
} = cartSlice.actions;
export default wishlistSlice.reducer;