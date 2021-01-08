import React from 'react';
import Map from './Map';
import Button from './Button.jsx';
import './App.css';

function App() {
  
  return (
    <div id="app">
      <Map
      zoom={5}
      lat={19.453603}
      lng={-99.140410}/>
      <Button/>
    </div>
  );
}

export default App;
