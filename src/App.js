import React, { useEffect, useState } from 'react';
import './App.css';
// import NavBar from './components/NavBar.js';
import FruitList from './components/FruitList.js';
import AddFruit from './components/AddFruit.js';

function App() {

  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/fruits')
    .then(res => res.json())
    .then(data => setFruits(data))
  }, []);

  return (
    <div className="App">
      
      <h1>FruitFinder</h1>
      <h3>We help you find fruit.</h3>

      {/* <NavBar /> */}
      <FruitList fruits={fruits} />
      <AddFruit fruits={fruits} />

    </div>
  );
}

export default App;
