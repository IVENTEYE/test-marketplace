import { configureStore } from "@reduxjs/toolkit";
import { cardSlice } from "./slices/cardSlice";
import { drawerSlice } from "./slices/drawerSlice";
import { walletSlice } from "./slices/walletSlice"

export const store = configureStore({
    reducer: {
        cards: cardSlice.reducer,
        drawer: drawerSlice.reducer,
        wallet: walletSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
