import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [list, setList] = useState([]);

  const catchPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
    .then(response => {setList(response.data.results)})
  }

  return (
    <div className="App">
      <button onClick={catchPokemon}>Fetch Pokemon</button>
      <ul>
        {list.map((item, i) => 
          <li key={i}>{item.name}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
