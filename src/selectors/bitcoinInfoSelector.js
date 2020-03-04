import { createSelector } from 'reselect'
import { formatNumber } from '../utils/helpers'
const appState = state => state

export const selectEuroPrice = createSelector(
  appState, 
  state => state && state.infoCoin.EUR && formatNumber(state.infoCoin.EUR.buy)
  )

export const selectUSDPrice = createSelector(
  appState, 
  state => state.infoCoin.USD && formatNumber(state.infoCoin.USD.buy)
  )

export const selectPriceEurInUsd = createSelector(
  appState,
  state => formatNumber(selectEuroPrice(state) * (state.exchangeEUR.rates && state.exchangeEUR.rates.USD))
)

export const selectPriceUsdInEur = createSelector(
  appState,
  state => formatNumber(selectUSDPrice(state) * (state.exchangeUSD.rates && state.exchangeUSD.rates.EUR))
)

export const selectResult = createSelector(
  appState,
  state => {
    let result;
    if (selectPriceEurInUsd(state) < selectUSDPrice(state)) {
      const difference = formatNumber((selectUSDPrice(state) * 100) / selectPriceEurInUsd(state))
      result = 'Si compras BTC usando EUR, te costará un ' + Math.abs(difference - 100).toFixed(2) + '% menos.';
    } else if (selectPriceEurInUsd(state) > selectUSDPrice(state)){
      const difference = formatNumber((selectUSDPrice(state) * 100) / selectPriceEurInUsd(state))
      result = 'Si compras BTC usando EUR, te costará un ' + Math.abs(difference - 100).toFixed(2) + '% mas.';
    } else {
      result = 'Si compras BTC usando EUR, te costará lo mismo que en USD.'
    }
    return result
  }
)