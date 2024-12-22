
import { useState } from 'react';

import Upgrade from './components/Upgrade';


import './App.css';

const App = () => {
  // Number of cookies
  const [count, setCount] = useState(0);

  // Multiplier for the cookies per click
  const [multiplier, setMultiplier] = useState(1);
  
  const updateCount = () => setCount(count + multiplier);

  const buyDoubleChocolate = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 2);
      setCount(count - 10);
    }
  }

  const buyPartyPack = () => {
    if (count >= 100) {
      setMultiplier(multiplier * 5);
      setCount(count - 100);
    }
  }

  const buyFullFeast = () => {
    if (count >= 1000) {
      setMultiplier(multiplier * 10);
      setCount(count - 1000);
    }
  }

  return (
    <div className="app">
      <div className="header">
        <h1>Cookie Selector</h1>

        <h2>Count: {count}</h2>

        <img 
          src="https://funnyfacebakery.com/cdn/shop/products/Cookie_Transparent_2000x.png?v=1623448593" 
          alt="A plate of cookies" 
          className="cookie"
          onClick={updateCount} />
      </div>

      <div className="container">
        <Upgrade 
          name='Double Chocolate 🍫'
          desc='2x per click'
          cost='10 cookies'
          onClickHandler={buyDoubleChocolate} />
        
        <Upgrade 
          name='Party Pack 🎉'
          desc='5x per click'
          cost='100 cookies'
          onClickHandler={buyPartyPack} />
        
        <Upgrade 
          name='Full Feast 👩🏽‍🍳'
          desc='10x per click'
          cost='1000 cookies'
          onClickHandler={buyFullFeast} />
      </div>
    </div>
  )
}

export default App