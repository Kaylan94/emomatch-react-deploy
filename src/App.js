import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Game from './Components/Game';


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>    
        <Route path="/Game" component={Game} />
      </BrowserRouter>
         
    </div>
  );
}

export default App;
