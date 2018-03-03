import React, { Component } from 'react';
import './myStyles.css';
import AddExpense from './AddExpense';
import ExpenseTable from './ExpenseTable';

export default class Home extends Component {
    state = {
        submittedData: {}
    };

    submittedData = (fields) => {
        this.setState({ submittedData: fields });
    }
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1>HyderabadBoyz</h1>
                        <p className="lead">Add your expenses</p>
                    </div>
                </div>
                <AddExpense submittedData={fields => this.submittedData(fields)} /> <br />
                <ExpenseTable submittedData={this.state.submittedData} />
            </div>
        );
    }
}