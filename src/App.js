import React from 'react';
import "./App.css"

import Board from './components/Board/Board.jsx'

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-md-6 offset-md-3">
          <h3> TIC TAC TOE </h3>
          <Board />
        </div>
      </div>
    </div>
  );
}

export default App;
