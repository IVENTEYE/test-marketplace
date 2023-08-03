import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import dollarImg from '../../assets/icons/dollar.png'
import coinImg from '../../assets/icons/coin.png'

const initialState = {
    overallBalance: 0,
    currencies: [
        {
            image: dollarImg,
            name: 'USD',
            account: 'usd'
        },
        {
            image: coinImg,
            name: 'Coin',
            account: 'coin'
        },
    ],
    usd: 1200,
    coin: 500,
}

export const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        setOverallBalance(state) {
            state.overallBalance = state.usd + state.coin;
        },
        convertUsd(state, action: PayloadAction<number>) {
            state.usd = state.usd + action.payload;
            state.coin = state.coin - action.payload;
        },
        convertCoin(state, action: PayloadAction<number>) {
            state.coin = state.coin + action.payload;
            state.usd = state.usd - action.payload;
        },
        setUsd(state, action: PayloadAction<number>) {
            state.usd = action.payload;
        },
        setCoin(state, action: PayloadAction<number>) {
            state.coin = action.payload;
        }
    }
});