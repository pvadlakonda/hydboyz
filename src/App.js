import React, { Component } from 'react';
import './App.css';
import Expense from './Expense';
import ExpenseTable from './ExpenseTable';

class App extends Component {
  render() {
    return (
      <div className="container App">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1>HyderabadBoyz</h1>
            <p class="lead">Add your expenses</p>
          </div>
        </div>
        <Expense /><br />
        <ExpenseTable />
      </div>
    );
  }
}

export default App;
