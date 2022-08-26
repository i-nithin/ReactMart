import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items : [],
    quantity : 0,
    cartTotal : 0
}

export const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addItem : (state,action) => {
            state.items.push()
        },
        removeItem : (state,action) => {

        }
    }
})

export const cartReducer = cartSlice.reducer
export const {addItem,removeItem} = cartSlice.actions