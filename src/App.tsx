import React, { useState, useEffect } from 'react';
import './App.css';

// assets
import CenLogo from './assets/CenWhite.png';

function App() {
  return (
    <div className="App">
      <header className="header">
         <div className="header-logo-container">
           <img className="header-logo" src={CenLogo} />
	 </div> 
	 <div className="header-button-container">
           <button className="header-button">Launch</button>
	 </div>
      </header>
    </div>
  );
}

export default App;
