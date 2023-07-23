import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    visible: false,
    cartItems : [],
    itemsCounts: 0,
    total: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setVisible: (state,action)=>{
            state.visible = action.payload;
        }
    }
})

export const { setVisible } = cartSlice.actions;
export default cartSlice.reducer;