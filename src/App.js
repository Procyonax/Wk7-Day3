import logo from './logo.png';
import './App.css';
import React from 'react';
import SongContainer from './containers/SongContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Top 20 Chart: UK Edition</h1>
        <SongContainer />
      </header>
    </div>
  );
}

export default App;
