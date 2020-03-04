
let urlCoinInfo = 'https://blockchain.info/ticker'
let urlExchaneInfo = 'https://api.exchangeratesapi.io/'


const logic = {
  
  retriveCoinInfo() {
        return fetch(urlCoinInfo)
        .then(res => res.json())
        .then(res => {
          if (res.error) throw Error(res.error)
          return res
      })
    },

    retriveExchangeInfo(base, cambio) {
      return fetch(`${urlExchaneInfo}latest?base=${base}&symbols=${cambio}`)
      .then(res => res.json())
      .then(res => {
        if (res.error) throw Error(res.error)
        return res
    })
  }
}
export default logic;
