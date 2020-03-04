import React from 'react';
import PropTypes from 'prop-types'
import './button.scss';
const Button = ({onClick, text}) => {
  return(
    <button className="button" onClick={()=> onClick()}>{text}</button>
    )
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  appState: PropTypes.shape({
    infoCoin: PropTypes.array,
    exchangeEUR: PropTypes.array,
    exchangeUSD: PropTypes.array,

  })
}
export default Button
