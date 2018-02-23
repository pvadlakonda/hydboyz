import React, { Component } from 'react';
import './App.css';
import Expense from './Expense';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> HyderabadBoyz </h1>
        <Expense />
      </div>
    );
  }
}

export default App;
