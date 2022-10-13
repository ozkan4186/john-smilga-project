import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {



  
  return (
    <div>
      <h3 className='title' >OUR MENU</h3>
      <div className="underline"></div>

      <Categories/>
  <Menu items={items}/>
  
    </div>

  )
}

export default App;
