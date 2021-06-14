import react, { useState,useEffect } from 'react';
import axios from 'axios';
import Coin from './Coin';
import  './App.css';
import  './Coin.css';
import logo from './btc.svg';

function App() {

  const[dark,setMode]=useState(false);

  const[coins,Setcoins]=useState([]);
  const [search, setSearch] = useState('');
  
  useEffect(() =>
  {
    
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
    .then(res => {
      Setcoins(res.data);
      console.log(res.data);
    })
    .catch(err=>{
      console.log(err);
    })
     
   
   

  },[]);

  const handleChange = e =>{
    setSearch(e.target.value);
  };

  const filteredCoins=coins.filter(coin=>
    
    coin.name.toLowerCase().includes(search.toLowerCase())
    
    );

  return (
    
    <div className={dark ? 'coin-app darkmode':'coin-app lightmode'}>
      <div className='App'>
      <div className='nav '>  
        Choose Your Mode
        <label className='switch'>
          <input type="checkbox"
          onChange={()=>setMode(!dark)} />
          <span className="slider round"></span>
        </label>
      </div>
      </div>

      <br></br>
      
      <img src={logo} alt='logo' width="200" height="200"></img>
      <br></br>
      <div className='coin-search'>
          <h1 className='coin-text'> Search Your Coin</h1>
      
      <form >
        <input type='text' onChange={handleChange} placeholder='search' className='search-button' ></input>
      </form>
      </div>

      <div className='coin-container'>
        <div className='coin-row'>
          <div className='coin'>
            <h1>Rank</h1>
            <h1>Name</h1>
            <h1>Symbol</h1>
          
          
            <h1 className='coin-price'>Price</h1>
            <h1>volume</h1>
            <h1>Change</h1>
            <h1>Mkt Cap</h1>
          
          </div>
          </div>
      </div>



      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            rank={coin.market_cap_rank}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}

export default App;
