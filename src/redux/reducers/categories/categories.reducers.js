import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    categories: []
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state,action) => {
            state.categories = action.payload;
        }
    }
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;