
import { useState } from 'react';

import Upgrade from './assets/components/Upgrade';


import './App.css';

const App = () => {

  const [count, setCount] = useState(0);

  const [multiplier, setMultiplier] = useState(1);
  
  const updateCount = () => setCount(count + multiplier);

  const buyDoubleStuffed = () => {
    console.log('Count: ', count);
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
        <h1>Samosa Selector</h1>

        <h2>Count: {count}</h2>

        <img 
          src="https://static.vecteezy.com/system/resources/previews/025/269/850/non_2x/samosa-with-ai-generated-free-png.png" 
          alt="A plate of Samosas" 
          className="samosa"
          onClick={updateCount} />
      </div>

      <div className="container">
        <Upgrade 
          name='Double Stuffed 👯‍♀️'
          desc='2x per click'
          cost='10 samosas'
          onClickHandler={buyDoubleStuffed} />
        
        <Upgrade 
          name='Party Pack 🎉'
          desc='5x per click'
          cost='100 samosas'
          onClickHandler={buyPartyPack} />
        
        <Upgrade 
          name='Full Feast 👩🏽‍🍳'
          desc='10x per click'
          cost='1000 samosas'
          onClickHandler={buyFullFeast} />
      </div>
    </div>
  )
}

export default App