import React, { Component } from 'react';
import './Home.css';
import AddExpense from './AddExpense';
import ExpenseTable from './ExpenseTable';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1>HyderabadBoyz</h1>
                        <p className="lead">Add your expenses</p>
                    </div>
                </div>
                <AddExpense /> <br />
                <ExpenseTable />
            </div>
        );
    }
}