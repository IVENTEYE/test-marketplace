import { PayloadAction, createSlice } from "@reduxjs/toolkit"


const initialState = {
    items: [],
    drawerCost: 0,
}

export const drawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.items.push(action.payload);
        },
        setCartItems(state, action) {
            state.items = action.payload;
        },
        setDrawerCost(state, action: PayloadAction<number>) {
            state.drawerCost = action.payload;
        }
    }
});