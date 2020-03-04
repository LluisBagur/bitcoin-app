import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Button from './components/button/button';
import PrintComponent from './components/printComponent/printComponent';
import './App.scss';
import logic from './logic/logic';
import{
  selectEuroPrice, 
  selectUSDPrice, 
  selectPriceEurInUsd, 
  selectPriceUsdInEur,
  selectResult
} from './selectors/bitcoinInfoSelector'

import { setInfo} from "./reducers/showInfo/showInfo"
function App() {
  const dispatch = useDispatch()
  const appState = useSelector((state) => state.showInfo)

  const handleInfoRequest = async () => {
    const [infoCoin, exchangeEUR, exchangeUSD] = await Promise.all([
      logic.retriveCoinInfo(),
      logic.retriveExchangeInfo('EUR', 'USD'),
      logic.retriveExchangeInfo('USD', 'EUR')
    ])
    dispatch(setInfo({
      infoCoin, exchangeEUR, exchangeUSD
    }))
  }

  return (
      <div className="container-Body">
        <h1>BITCOIN APP</h1>
          <PrintComponent
            priceEur={selectEuroPrice(appState)}
            priceUsd={selectUSDPrice(appState)} 
            result={selectResult(appState)} 
            priceUsdInEur={selectPriceUsdInEur(appState)} 
            priceEurInUsd={selectPriceEurInUsd(appState)} />
          <Button onClick={handleInfoRequest} text="CALCULAR" />
      </div>
  );
}

export default App;
