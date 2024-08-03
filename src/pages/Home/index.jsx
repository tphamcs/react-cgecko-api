import React, { useContext, useEffect, useState } from 'react';
import './index.scss'
import { CoinListContext } from '../../context/CoinListContext';
import CountDown from '../../components/CountDown';
import FilterBy from '../../components/FilterBy';

const Home = () => {

  // using coinlist global object
  const {coinList} = useContext(CoinListContext)
  const [displayCoinList, setDisplayCoinList] = useState([])
  const [input, setInput] = useState('')


  const inputHandler = (e) => {
    setInput(e.target.value)
  }

  const searchHandler = async (e) => {
    e.preventDefault()
    const results = await coinList.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase())
    })
    setDisplayCoinList(results)
  }

  useEffect(() => {
    // call api every 1 minute to get an update
    //setInterval(, 60000);
    setDisplayCoinList(coinList)
  }, [coinList]);

  return (
    <div className='home'>

      <div className='hero'>
        <h1>CoinGecko API</h1>
        <form onSubmit={searchHandler}>
          <input onChange={inputHandler} value={input} type='text' placeholder='Search ...' />
        </form>
      </div>

      <div className='top-filter'>
        <CountDown></CountDown>
        <FilterBy></FilterBy>     
      </div>
      

      <div className='crypto-table'>
        <div className='table-heading table-layout'>
          <p>#</p>
          <p>Name</p>
          <p>Price</p>
          <p>24h Change</p>
          <p className='market-cap'>Market Cap</p>
        </div>
        {
          displayCoinList?.map((item, index) => (
            <div className="table-layout" key={index}>
              <p>{item.market_cap_rank}</p>

              <p>{item.name}</p>

              <p>${item.current_price}</p>

              <p>{Math.floor(item.price_change_percentage_24h*100)/100}%</p>

              <p className='market-cap'>${item.market_cap.toLocaleString()}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Home;