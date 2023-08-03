
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        setCards (state, action: PayloadAction<[]>) {
            state.items = action.payload;
        }
    },
});