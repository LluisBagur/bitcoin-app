import { createSlice } from '@reduxjs/toolkit'

const coin = createSlice({

  name: 'coin',
  initialState: { infoCoin: [], exchangeEUR: [], exchangeUSD: [], },
  reducers: {
    setInfo: (state, action) => {
      state.infoCoin = action.payload.infoCoin;
      state.exchangeEUR = action.payload.exchangeEUR;
      state.exchangeUSD = action.payload.exchangeUSD;
    },
  },
})

export const {
  setInfo
} = coin.actions
export default coin.reducer