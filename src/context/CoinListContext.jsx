import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

/**
 * using createContext as Global object
 */

// initiate context 
export const CoinListContext = createContext()

// create context provider 
const CoinListProvider = (props) => {
  const [coinList, setCoinList] = useState([])
  const [numberResult, setNumberResult] = useState(10)

  // call api
  const fetchCoinList = async () => {
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${numberResult}&page=1&sparkline=false`)
      const data = response.data
      setCoinList(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    // Delay 5s after each filter to fix ERR_FAILED 429 (Too Many Requests)
    setTimeout(() => {
      fetchCoinList();
    }, 5000);

  }, [numberResult]);

  const contextValue = {coinList, setNumberResult}

  return (
    <CoinListContext.Provider value={contextValue}>
      {props.children}
    </CoinListContext.Provider>
  );

}

export default CoinListProvider;