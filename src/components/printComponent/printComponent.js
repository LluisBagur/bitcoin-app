import React from 'react';
import './printComponent.scss';
import PropTypes from 'prop-types'

const PrintComponent = ({priceEur=0, priceUsd=0, result, priceUsdInEur, priceEurInUsd}) => {
    return(
        <div className="container-Box">
            <div className="container-Info">
                <div className="input-panel">
                    <p>BITCOIN VALUE:</p>
                    </div>
                        <div className="input-panel">
                        <p>USD: </p>
                        <div className="input-form" >{priceUsd}$ ({priceUsdInEur !== undefined ? priceUsdInEur: null} €)</div>
                        </div>
                        <div className="input-panel">
                        <p>EUR: </p>
                        <div className="input-form" >{priceEur}€ ({priceEurInUsd !== undefined ? priceEurInUsd : null} $)</div>
                    </div>
                </div>
            <p className="result" >{result ? result: null}</p>
        </div>
    )
} 

PrintComponent.propTypes = {
    priceEur: PropTypes.number,
    priceUsd: PropTypes.number,
    result: PropTypes.string,
    priceUsdInEur: PropTypes.number,
    priceEurInUsd: PropTypes.number,

  }
export default PrintComponent